import { CreateUser, UserCreateResponse, UserLogin } from "./types/user";
import { PrismaClient, Profile, UserSession } from "@prisma/client";
import { IAuthRepository } from "./user.interface";
import { changePhoneNo } from "Features/utils/phone.util";
import bcrypt from "bcrypt";
import { randomUUID } from "crypto";
const prisma = new PrismaClient();
export class AuthRepository implements IAuthRepository {

    async findByEmailOrPhone(emailOrPhone: string): Promise<UserLogin | any> {
        return prisma.user.findFirst({
            where: {
                OR: [{ email: emailOrPhone }, { phone_no: emailOrPhone }],
            },
            select: {
                id: true,
                uuid: true,
                name: true,
                email: true,
                phone_no: true,
                password: true,
                roleId: true,
                role: {
                    select: {
                        id: true,
                        name: true,
                    },
                }
            },
        });
    }
    async createUser(userData: CreateUser): Promise<any> {
        return prisma.user.create({
            data: userData,
        });
    }
    async loginUser(emailOrPhone: string, password: string): Promise<UserLogin | any> {
        const user = await prisma.user.findFirst({
            where: {
                OR: [{ email: emailOrPhone }, { phone_no: changePhoneNo(emailOrPhone) }]
            },
            select: {
                id: true,
                uuid: true,
                name: true,
                email: true,
                phone_no: true,
                password: true,
                role: {
                    select: {
                        name: true, // get the role name
                    }
                }
            },

        });

        if (!user) return { status: false, message: "User not found" };

        const isValid = await checkPassword(password, user.password);
        if (!isValid) return { status: false, message: "User's password not match" };

        return user;
    }

    async createSession(
        session: string,
        userId: number,
        deviceType: string, // new param
        userAgent?: string,
        userIp?: string,
        deviceId?: string // optional
    ): Promise<any> {
        const newSession = await prisma.userSession.create({
            data: {
                userId: Number(userId),
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

    async getSession(userId: number): Promise<any | null> {
        return prisma.userSession.findFirst({
            where: { userId },
            orderBy: { createdAt: "desc" },
        });
    }

    async updateSession(
        session: string,
        userId: number,
        userAgent?: string,
        userIp?: string
    ): Promise<any> {
        const finalUserAgent = userAgent ?? "unknown";
        const finalIp = userIp ?? "unknown";

        // Find the latest session for this user
        const existingSession = await prisma.userSession.findFirst({
            where: { userId },
            orderBy: { createdAt: "desc" },
        });

        if (existingSession) {
            // Update the existing session
            const updated = await prisma.userSession.update({
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
                user_id: updated.userId,
                refresh_token: updated.refreshToken,
                device_type: updated.device_type,
                ip_address: updated.ipAddress,
                created_at: updated.createdAt,
            };
        } else {
            // Create a new session if none exists
            const newSession = await prisma.userSession.create({
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
                user_id: newSession.userId,
                refresh_token: newSession.refreshToken,
                device_type: newSession.device_type,
                ip_address: newSession.ipAddress,
                created_at: newSession.createdAt,
            };
        }
    }


}
export async function checkPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
}
