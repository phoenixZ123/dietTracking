import fastify, { FastifyInstance } from "fastify";
import { authSchema } from "./schemas/user.schema";
import { AuthHandler } from "./user.handler";

const authHandler = new AuthHandler();
export default async function authFunction(fastify: FastifyInstance): Promise<void> {
    fastify.post("/register",
        authSchema.register,
        authHandler.registerUser
    );
    fastify.post("/login", authSchema.login, authHandler.loginUser);

}