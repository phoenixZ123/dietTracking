// import { FastifyInstance, FastifyRequest } from "fastify";
// import { IAuthRepository } from "./auth.interface";
// import { CreateUser, RegisterResponse, UserCreateResponse } from "./types/user";
// import { http_status } from "Features/shared/constants/http";
// import { changePhoneNo } from "Features/utils/phone.util";
// import { v4 as uuidv4 } from 'uuid';

// interface ResetResponse {
//     status: boolean;
//     message: string;
// }

// export class AuthService {
//     constructor(private authRepository: IAuthRepository) { }

//     async checkUserExists(
//         fastify: FastifyInstance,
//         phoneOrEmail: string
//     ): Promise<ResetResponse> {
//         try {
//             const user = await this.authRepository.findByEmailOrPhone(phoneOrEmail);
//             if (!user) {
//                 return { status: false, message: "User is not registered" };
//             }
//             return { status: true, message: "User exist!" };

//         } catch (err) {
//             return { status: false, message: `${err}` };
//         }
//     }
//     async register(fastify: FastifyInstance, userData: CreateUser) {
//         var result: RegisterResponse = {}
//         try {
//             if (userData.phone_no) {
//                 userData.phone_no = changePhoneNo(userData.phone_no)
//             }
//             const user: UserCreateResponse = await this.authRepository.createUser(userData);
//             const emailOrPhone = userData.phone_no || userData?.email!;
//             const existingUser = await this.authRepository.findByEmailOrPhone(
//                 emailOrPhone
//             );
//             if (existingUser) {
//                 result.status = false;
//                 result.message = "User already exists";
//                 return result;
//             }
//             if (user) {
//                 result.status = true
//                 result.message = "User Created Successfully"
//                 result.data = user
//                 return result
//             }
//         } catch (err: any) {
//             result.status = false
//             result.message = err.message
//             return result;
//         }

//     }
// }
import fastify, { FastifyInstance } from "fastify";
import bcrypt from "bcrypt";
import { CreateUser, UserLogin } from "./types/user";
import { RegisterResponse } from "./types/user";
import { AuthRepository } from "./user.repository";
import { changePhoneNo } from "Features/utils/phone.util";
import { hashPassword } from "Features/utils/hash";
import { UserStatus } from "Features/shared/constants/userConstraint";
import { http_status } from "Features/shared/constants/http";
import { JwtPayload } from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { generateJWT } from "Features/utils/auth.util";
export class AuthService {
    private authRepository = new AuthRepository();

    async register(user: CreateUser): Promise<RegisterResponse | any> {
        const result: RegisterResponse = { status: true, message: "" };

        try {

            let checkByEmail = null;
            let checkByPhone = null;

            if (user.email) {
                checkByEmail = await this.authRepository.findByEmailOrPhone(user.email);
            }
            if (checkByEmail) {
                return { status: false, message: "Email already exists." };
            }

            if (user.phone_no) {
                user.phone_no = changePhoneNo(user.phone_no);
                checkByPhone = await this.authRepository.findByEmailOrPhone(user.phone_no);
            }
            if (checkByPhone) {
                return { status: false, message: "Phone number already exists." };
            }

            user.password = await hashPassword(user.password);

            const response = await this.authRepository.createUser(user);
            if (response) {
                return {
                    status: true,
                    message: "User created successfully",
                    data: response,
                };
            }

            // Fallback if response is somehow falsy
            return {
                status: false,
                message: "Failed to create user",
            };

        } catch (err: any) {
            return {
                status: false,
                message: err.message || "Error creating user",
            };
        }
    }
    async login(fastify: FastifyInstance, emailOrPhone: string, password: string, userAgent?: string,
        userIp?: string) {
        const user = await this.authRepository.loginUser(emailOrPhone, password);

        const session = await this.authRepository.getSession(user.id);
        let newSession;
        const uuid = uuidv4();

        if (!session) {
            newSession = await this.authRepository.createSession(uuid, user.id, String(userAgent), userIp);
        } else {
            newSession = await this.authRepository.updateSession(uuid, user.id, userAgent, userIp);
        }
        const payload: JwtPayload = {
            id: user.id,
            uuid: user.uuid,
            name: user.name,
            session: newSession.refreshToken
        };

        const token: object = generateJWT(fastify, payload);
        return {
            status: true,
            message: "Login successful",
            data: user,
            token: token
        };;
    }
}
