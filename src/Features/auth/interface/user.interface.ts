import { CreateUser, ProfileResponse, UpdateProfile, UserCreateResponse, UserLogin } from "../types/user";
import { UpdateProfileBody } from "../user.repository";

export interface IAuthRepository {
    findByEmailOrPhone(emailOrPhone: string): Promise<UserLogin | null>;
    createUser(userData: CreateUser): Promise<UserCreateResponse>;
    loginUser(emailOrPhone: string, password: string): Promise<UserLogin | any>;
    getProfile(userId: string): Promise<any>;
    updateProfile(
        updateDataInput: UpdateProfileBody,
        userId: string
    ): Promise<any>;
}