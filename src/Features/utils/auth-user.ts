// utils/auth.ts
import { FastifyRequest, FastifyReply } from "fastify";
import jwt from "jsonwebtoken";

export interface JwtPayload {
    id: number;
    email: string;
    role?: string;
}

export function authenticate(
    request: FastifyRequest,
    reply: FastifyReply,
    done: (err?: Error) => void
) {
    try {
        const authHeader = request.headers.authorization;

        if (!authHeader) {
            reply.status(401).send({ message: "Missing Authorization header" });
            return;
        }

        const token = authHeader.split(" ")[1]; // Bearer <token>

        if (!token) {
            reply.status(401).send({ message: "Token not found" });
            return;
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

        // store decoded user
        (request as any).user = decoded;

        done();
    } catch (err) {
        reply.status(401).send({ message: "Invalid or expired token" });
    }
}
