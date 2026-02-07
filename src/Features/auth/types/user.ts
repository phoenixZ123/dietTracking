import { ActivityLevel, Gender } from "@prisma/client";
import { RoleType } from "./roleType";
export enum ActivityLevel {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH"
}

export type UserLogin = {
    id: string;
    uuid: string;
    name: string;
    email: string | "";
    phone_no: string | "";
    password: string;
    roleId?: number;
    role?: RoleType;
}

export type CreateUser = {
    id: string;
    email: string | "";
    name: string;
    phone_no: string | "";
    password: string;
    roleId?: string;
}
export interface UserCreateResponse {
    id: string;
    uuid: string;
    name: string;
    email: string | "";
    phone_no: string | "";
    roleId: number;
}
export interface RegisterResponse {
    status?: boolean;
    message?: string;
    data?: UserCreateResponse;
    // token?: object;
}
export interface Profile {
    id: string;
    userId: string;
    age?: number | null;
    gender?: string | null;
    heightCm?: number | null;
    weightKg?: number | null;
    goalWeight?: string | null;
}

export interface ProfileResponse {
    User: UserLogin;
    Profile: Profile;
}
export type UpdateProfile = {
    gender?: Gender;
    birthDate?: Date;
    heightCm?: number;
    weightKg?: number;
    goalWeight?: number;
    activityLevel?:ActivityLevel;

}

export type UpdateUser = {
    name: string;
    phone_no: string | "";
    age?: number | null;
    gender?: string | null;
    height?: number | null;
    weight?: number | null;
    goal?: string | null;
}