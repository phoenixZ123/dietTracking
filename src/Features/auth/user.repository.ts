import { ActivityLevel, CreateUser, ProfileResponse, UserLogin } from "./types/user";
import { changePhoneNo } from "../../Features/utils/phone.util";
import { mainDb } from "../../config/db.config";
import { Gender, Prisma } from "@prisma/client";
import { checkPassword, parseGender } from "../../Features/utils/userProfile.util";
import { IAuthRepository } from "./interface/user.interface";

export interface UpdateProfileBody {
    gender?: string;
    birthDate?: string;
    heightCm?: number;
    weightLb?: number;
    goalWeight?: number;
    activityLvl?: ActivityLevel;
}
export class AuthRepository implements IAuthRepository {

    async findByEmailOrPhone(emailOrPhone: string): Promise<UserLogin | any> {
        return mainDb.user.findFirst({
            where: {
                OR: [{ email: emailOrPhone }, { phone_no: emailOrPhone }],
            },
            select: {
                id: true,
                name: true,
                email: true,
                phone_no: true,
                password: true,
                // roleId: true,
                // role: {
                //     select: {
                //         id: true,
                //         name: true,
                //     },
                // }
            },
        });
    }
    async createUser(userData: CreateUser): Promise<any> {
        // return prisma.user.create({
        //     data: {
        //         email: userData.email,
        //         phone_no: userData.phone_no,
        //         password: userData.password,
        //         name: userData.name,
        //         // role: {
        //         //     connect: {
        //         //         id: userData.roleId ?? "424bb4c9-18b4-499c-869b-2120b19bc335" // default UUID for USER role
        //         //     }
        //         // },
        //     },
        // });
        const result = await mainDb.$transaction(async (tx: any) => {
            const user = await tx.user.create({
                data: {
                    email: userData.email,
                    phone_no: userData.phone_no,
                    password: userData.password,
                    name: userData.name,
                },
            });

            await tx.profile.create({
                data: {
                    userId: user.id,
                },
            });

            return tx.user.findUnique({
                where: { id: user.id },
                include: {
                    profile: true,
                },
            });
        });

        return result;

    }
    async loginUser(emailOrPhone: string, password: string): Promise<UserLogin | any> {
        const user = await mainDb.user.findFirst({
            where: {
                OR: [{ email: emailOrPhone }, { phone_no: changePhoneNo(emailOrPhone) }]
            },
            select: {
                id: true,
                name: true,
                email: true,
                phone_no: true,
                password: true,
                // role: {
                //     select: {
                //         name: true, // get the role name
                //     }
                // }
            },

        });
        if (!user) return { status: false, message: "User not found" };

        const isValid = await checkPassword(password, user.password);
        if (!isValid) return { status: false, message: "User's password not match" };

        return user;
    }

    async getProfile(userId: string): Promise<any> {
        const result = await mainDb.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                phone_no: true,
                name: true,
                role: true,  // scalar field
                created_at: true,
                updated_at: true
            }
        });

        return result;

        return result;
    }
    async createSession(
        session: string,
        userId: string,
        deviceType: string, // new param
        userAgent?: string,
        userIp?: string,
        deviceId?: string // optional
    ): Promise<any> {

        const newSession = await mainDb.userSession.create({
            data: {
                userId: String(userId),
                device_type: deviceType ?? "web",       // camelCase
                refreshToken: session,
                userAgent: userAgent ?? "unknown",     // required
                ipAddress: userIp ?? "",
                is_online: true,                        // camelCase
                createdAt: new Date(),
            },
        });

        return newSession;
    }

    async updateProfile(
        updateDataInput: UpdateProfileBody,
        userId: string
    ): Promise<any> {
        const profile = await mainDb.profile.findUnique({
            where: { userId },
        });

        if (!profile) {
            return {
                success: false,
                message: "Profile not found",
            };
        }
        let gender: Gender | undefined;

        try {
            gender = parseGender(updateDataInput.gender);
        } catch {
            return {
                success: false,
                message: "Invalid gender value",
            };
        }
        const updateData: Prisma.ProfileUpdateInput = {
            gender,
            heightCm: updateDataInput.heightCm,
            weightLb: updateDataInput.weightLb,
            goalWeight: updateDataInput.goalWeight,
            activityLvl: updateDataInput.activityLvl,
            birthDate: updateDataInput.birthDate
                ? new Date(updateDataInput.birthDate)
                : undefined,
        };

        const updatedProfile = await mainDb.profile.update({
            where: { userId: userId },
            data: updateData,
        });

        return
        updatedProfile;
    }


    async getSession(userId: string): Promise<any | null> {
        const userSession = await mainDb.userSession.findFirst({
            where: { userId },
            orderBy: { createdAt: "desc" },
        });
        return userSession;
    }

    async updateSession(
        session: string,
        userId: string,
        userAgent?: string,
        userIp?: string
    ): Promise<any> {
        const finalUserAgent = userAgent ?? "unknown";
        const finalIp = userIp ?? "unknown";

        // Find the latest session for this user
        const existingSession = await mainDb.userSession.findFirst({
            where: { userId },
            orderBy: { createdAt: "desc" },
        });

        if (existingSession) {
            // Update the existing session
            const updated = await mainDb.userSession.update({
                where: { id: existingSession.id },
                data: {
                    refreshToken: session,
                    is_online: true,
                    device_type: finalUserAgent,
                    ipAddress: finalIp,
                },
            });

            return {
                id: updated.id,
                userId: updated.userId,
                refreshToken: updated.refreshToken,
                device_type: updated.device_type,
                ipAddress: updated.ipAddress,
                createdAt: updated.createdAt,
            };
        } else {
            // Create a new session if none exists
            const newSession = await mainDb.userSession.create({
                data: {
                    userId,
                    refreshToken: session,
                    device_type: finalUserAgent,
                    userAgent: finalUserAgent, // required
                    ipAddress: finalIp,
                    is_online: true,
                    createdAt: new Date(),
                },
            });

            return {
                id: newSession.id,
                userId: newSession.userId,
                refreshToken: newSession.refreshToken,
                device_type: newSession.device_type,
                ipAddress: newSession.ipAddress,
                createdAt: newSession.createdAt,
            };
        }
    }

    async logoutSession(sessionToken: string) {
        return await mainDb.userSession.updateMany({
            where: { user: { id: sessionToken } },
            data: {
                is_online: false,
                updatedAt: new Date(),
                last_seen: new Date()
            }
        });
    }

}

