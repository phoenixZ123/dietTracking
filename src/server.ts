import Fastify, { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import * as dotenv from "dotenv";
import fastifyJwt from "@fastify/jwt";
import cors from "@fastify/cors";
import multipart from "@fastify/multipart";
import fastifyUrlData from "@fastify/url-data";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";

import logger from "./Features/core/logger";
import roleCheck from "./Features/core/roleCheck";
import registerRoutes from "./router";

dotenv.config();

const PORT = Number(process.env.PORT) || 7777;
const HOST = process.env.HOST || "localhost";

logger.info("server starting ....");

const server: FastifyInstance = Fastify({
    logger: true,
    connectionTimeout: 0,
});

// --- Register plugins --- //

// JWT
server.register(fastifyJwt, {
    secret: process.env.JWT_SECRET || "supersecret", // your JWT secret
    sign: { expiresIn: "1h" },
});

// CORS
server.register(cors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
});

// Custom middleware / plugin
server.register(roleCheck);

// URL parsing & multipart
server.register(fastifyUrlData);
server.register(multipart, { limits: { fileSize: 2 * 1024 * 1024 * 1024 } });

server.decorate(
    "authenticate",
    async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const authHeader = request.headers.authorization;
            if (!authHeader) throw new Error("No token provided");

            const token = authHeader.split(" ")[1];
            if (!token) throw new Error("No token provided");

            const decoded = server.jwt.verify(token) as { id: string;[key: string]: any };
            request.user = decoded;
        } catch (err) {
            return reply.status(401).send({ status: false, message: "Unauthorized" });
        }
    }
);

// --- Routes ---
server.register(registerRoutes, { prefix: "/api" });

// --- Swagger --- //
// server.register(swagger, {
//     openapi: {
//         info: {
//             title: "Diet Tracking API",
//             description: "API documentation for Diet Tracking App",
//             version: "1.0.0",
//         },
//         servers: [
//             { url: `http://${HOST}:${PORT}`, description: "Local server" },
//         ],
//     },
//     exposeRoute: true, // ✅ Correct place
// });

// // --- Swagger UI --- //
// server.register(swaggerUi, {
//     routePrefix: "/docs",
//     uiConfig: {
//         docExpansion: "list",
//         deepLinking: false,
//     },
//     staticCSP: true,
//     transformStaticCSP: (header) => header,
//     openapi: "/documentation.json", // must match swagger plugin path
// });

// --- Start Server --- //
const start = async () => {
    try {
        await server.listen({ port: PORT, host: "0.0.0.0" });
        logger.info(`Server started successfully on http://${HOST}:${PORT}`);
        console.log(`Server listening at http://localhost:${PORT}`);
        console.log(`Swagger is running at http://localhost:${PORT}/docs`);
    } catch (error) {
        logger.error(`Error starting server: ${error}`);
        console.error(error);
        process.exit(1);
    }
};

start();
