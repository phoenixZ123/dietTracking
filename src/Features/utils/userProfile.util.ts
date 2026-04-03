import bcrypt from "bcrypt";
import { Gender } from "../../../generated/main";
export function parseGender(value?: string): Gender | undefined {
    if (!value) return undefined;

    if (!Object.values(Gender).includes(value as Gender)) {
        throw new Error("Invalid gender value");
    }

    return value as Gender;
}

export async function checkPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
}