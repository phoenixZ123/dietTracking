import { FastifyInstance } from "fastify";
import { DailyLogHandler } from "./daily.handler";
import { authenticate } from "../utils/auth-user"; // FIX: correct relative path

const dailyLogHandler = new DailyLogHandler();
export default async function dailyLogRoute(fastify: FastifyInstance) {
    fastify.post(
        "/create-daily-log",
        dailyLogHandler.create.bind(dailyLogHandler) // FIX: ensure "this" binding
    );
    fastify.get("/get-daily-log/:date", dailyLogHandler.getDailyLog.bind(dailyLogHandler));
    fastify.get("/get-user-log", dailyLogHandler.getDateUserId.bind(dailyLogHandler));
}
