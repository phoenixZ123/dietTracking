import fastify, { FastifyInstance } from "fastify";
import bcrypt from "bcrypt";
import { CreateUser, UserLogin } from "./types/user";
import { RegisterResponse } from "./types/user";

import { AuthRepository } from "./user.repository";

import { changePhoneNo } from "../../Features/utils/phone.util";
import { hashPassword } from "../../Features/utils/hash";
import { JwtPayload } from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { generateJWT } from "../../Features/utils/auth.util";
import { IAuthRepository } from "./user.interface";

export class AuthService {
    private authRepository: IAuthRepository;

    constructor() {
        // Implement interface using repository
        this.authRepository = new AuthRepository();
    }

    async register(user: CreateUser): Promise<RegisterResponse | any> {
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

    async login(
        fastify: FastifyInstance,
        emailOrPhone: string,
        password: string,
        userAgent?: string,
        userIp?: string
    ) {
        const user = await this.authRepository.loginUser(emailOrPhone, password);

        // Session related methods are OUTSIDE the interface & inside repository
        const session = await (this.authRepository as any).getSession(user.id);

        let newSession;
        const uuid = uuidv4();

        if (!session) {
            newSession = await (this.authRepository as any).createSession(
                uuid,
                user.id,
                String(userAgent),
                userIp
            );
        } else {
            newSession = await (this.authRepository as any).updateSession(
                uuid,
                user.id,
                userAgent,
                userIp
            );
        }

        const payload: JwtPayload = {
            id: user.id,
            uuid: user.uuid,
            name: user.name,
            session: newSession.refreshToken,
        };

        const token: object = generateJWT(fastify, payload);

        return {
            status: true,
            message: "Login successful",
            data: user,
            token: token
        };
    }

    async logout(userId: string) {
        return await (this.authRepository as any).logoutSession(userId);
    }
}
