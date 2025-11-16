import bcrypt from "bcrypt";
export const hashPassword = async (password: string): Promise<string> => {
    const hashedPwd = bcrypt.hash(password, 10);
    return hashedPwd;
};