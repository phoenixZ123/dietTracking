export interface UserProfileData {
    id: string;
    email: string;
    phone_no: string;
    name: string;
    created_at: string;
    updated_at: string;
    profile: Profile;
}
export interface Profile {
    id: string;
    userId: string;
    gender: string | null;
    birthDate: string | null;
    heightCm: number | null;
    weightLb: number | null;
    goalWeight: number | null;
    activityLvl: string;
}
export interface ProfileResponse<T> {
    success: boolean;
    message: string;
    data: T;
}
