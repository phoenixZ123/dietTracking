import { Profile, User } from "@prisma/client";
import { CreateUser, ProfileResponse, UpdateProfile, UserCreateResponse, UserLogin } from "../types/user";

export interface IAuthRepository {
    findByEmailOrPhone(emailOrPhone: string): Promise<UserLogin | null>;
    createUser(userData: CreateUser): Promise<UserCreateResponse>;
    loginUser(emailOrPhone: string, password: string): Promise<UserLogin | any>;
    getProfile(userId: string): Promise<any>;
    updateProfile(
        data: UpdateProfile,
        userId: string
    ): Promise<Profile>;
    getUser(): Promise<User[]>;
}