import { FastifyInstance } from "fastify";
import { DailyLogHandler } from "./daily.handler";

const dailyLogHandler = new DailyLogHandler();
export default async function dailyLogRoute(fastify: FastifyInstance) {
    fastify.post(
        "/create-daily-log",
        dailyLogHandler.create.bind(dailyLogHandler) // FIX: ensure "this" binding
    );
    fastify.get("/get-daily-log/:date", dailyLogHandler.getDailyLog.bind(dailyLogHandler));
    fastify.get("/get-user-dailyLogs", dailyLogHandler.getDateUserId.bind(dailyLogHandler));
}
