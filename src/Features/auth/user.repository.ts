import { CreateUser, UserLogin } from "./types/user";
import { IAuthRepository } from "./user.interface";
import { changePhoneNo } from "../../Features/utils/phone.util";
import bcrypt from "bcrypt";
import { prisma } from "../../config/db.config";
export class AuthRepository implements IAuthRepository {

    async findByEmailOrPhone(emailOrPhone: string): Promise<UserLogin | any> {
        return prisma.user.findFirst({
            where: {
                OR: [{ email: emailOrPhone }, { phone_no: emailOrPhone }],
            },
            select: {
                id: true,
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
            data: {
                email: userData.email,
                phone_no: userData.phone_no,
                password: userData.password,
                name: userData.name,
                role: {
                    connect: {
                        id: userData.roleId ?? "424bb4c9-18b4-499c-869b-2120b19bc335" // default UUID for USER role
                    }
                },
            },
        });
    }
    async loginUser(emailOrPhone: string, password: string): Promise<UserLogin | any> {
        const user = await prisma.user.findFirst({
            where: {
                OR: [{ email: emailOrPhone }, { phone_no: changePhoneNo(emailOrPhone) }]
            },
            select: {
                id: true,
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
        userId: string,
        deviceType: string, // new param
        userAgent?: string,
        userIp?: string,
        deviceId?: string // optional
    ): Promise<any> {

        const newSession = await prisma.userSession.create({
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

    async getSession(userId: string): Promise<any | null> {
        const userSession = await prisma.userSession.findFirst({
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
                userId: updated.userId,
                refreshToken: updated.refreshToken,
                device_type: updated.device_type,
                ipAddress: updated.ipAddress,
                createdAt: updated.createdAt,
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
                userId: newSession.userId,
                refreshToken: newSession.refreshToken,
                device_type: newSession.device_type,
                ipAddress: newSession.ipAddress,
                createdAt: newSession.createdAt,
            };
        }
    }


    async logoutSession(sessionToken: string) {
        return await prisma.userSession.updateMany({
            where: { user: { id: sessionToken } },
            data: {
                is_online: false,
                updatedAt: new Date(),
                last_seen: new Date()
            }
        });
    }

}
export async function checkPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
}
