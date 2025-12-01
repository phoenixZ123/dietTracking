import { FastifyInstance } from "fastify";
import { DailyLogHandler } from "./daily.handler";
import { authenticate } from "../utils/auth-user"; // FIX: correct relative path

const dailyLogHandler = new DailyLogHandler();

export default async function dailyLogRoute(fastify: FastifyInstance) {
    fastify.post(
        "/create-daily-log",
        { preHandler: authenticate }, // FIX: Fastify requires preHandler wrapper
        dailyLogHandler.create.bind(dailyLogHandler) // FIX: ensure "this" binding
    );
}
