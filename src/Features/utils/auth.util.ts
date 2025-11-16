import { FastifyInstance } from "fastify";
import { JwtPayload } from "jsonwebtoken";

export const generateJWT = (
    fastify: FastifyInstance,
    payload: JwtPayload
): object => {
    const accessToken = fastify.jwt.sign(payload, { expiresIn: "7d" });

    const decode = fastify.jwt.decode<{ exp: number }>(accessToken);
    console.log('access expiry:', new Date(decode?.exp! * 1000).toLocaleString())

    const refreshPayload: JwtPayload = {
        ...payload,
        type: "refresh",
    };

    const refreshToken = fastify.jwt.sign(refreshPayload, {
        expiresIn: "14d",
    });
    const token = {
        access: accessToken,
        refresh: refreshToken,
    };

    return token;
};