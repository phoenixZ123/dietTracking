import { AxiosError } from "axios";
import axiosInstance from "../../httpClient";

export const logout = async (token: string) => {
    try {
        const response = await axiosInstance.post(
            "/auth/logout",
            {}, // no body needed
            {
                headers: {
                    Authorization: `Bearer ${token}`, // must be exact JWT from login
                },
            }
        );
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            throw (
                error.response?.data?.message || "An error occurred while logging out"
            );
        }
        throw new Error("An unexpected error occurred while logging out");
    }
};
