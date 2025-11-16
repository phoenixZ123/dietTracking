import { CreateUser, UserCreateResponse, UserLogin } from "./types/user";

export interface IAuthRepository {
    findByEmailOrPhone(emailOrPhone: string): Promise<UserLogin | null>;
    createUser(userData: CreateUser): Promise<UserCreateResponse>;
    loginUser(emailOrPhone: string, password: string): Promise<UserLogin | any>;

}