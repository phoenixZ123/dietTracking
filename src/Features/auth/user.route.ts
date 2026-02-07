import fastify, { FastifyInstance, FastifyRequest } from "fastify";
import { authSchema } from "./schemas/user.schema";
import { AuthHandler } from "./user.handler";

const authHandler = new AuthHandler();
export default async function authFunction(fastify: FastifyInstance): Promise<void> {
    fastify.post("/register",
        authSchema.register,
        authHandler.registerUser
    );
    fastify.post("/login", authSchema.login, authHandler.loginUser);
    fastify.get("/users", authHandler.getUser);
    fastify.post("/logout", authHandler.logout);
    fastify.get("/profile", authHandler.getProfile);
    fastify.put("/profile/update", authHandler.updateProfile);
}