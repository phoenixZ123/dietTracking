import { FastifyInstance } from "fastify";
import { DailyLogHandler } from "./daily.handler";

const dailyLogHandler = new DailyLogHandler();
export default async function dailyLogRoute(fastify: FastifyInstance) {
    fastify.post(
        "/create-daily-log",
        dailyLogHandler.create.bind(dailyLogHandler) 
    );
    fastify.get("/get-daily-log/:date", dailyLogHandler.getDailyLog.bind(dailyLogHandler));
    fastify.get("/daily-logs", dailyLogHandler.getDateUserId.bind(dailyLogHandler));
    fastify.delete("/:logId", dailyLogHandler.deleteDailyLog.bind(dailyLogHandler));
}
