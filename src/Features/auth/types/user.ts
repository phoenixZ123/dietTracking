import { RoleType } from "./roleType";

export type UserLogin = {
    id: number;
    uuid: string;
    name: string;
    email: string | "";
    phone_no: string | "";
    password: string;
    roleId: number;
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
    id: number;
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