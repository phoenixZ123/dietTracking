import { DailyLog } from "@prisma/client";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { dailyLogService } from "./daily-log.service";
import { dailyLogRepository } from "./daily-log.repository";
import { createDailyLog } from "./type/dailylog";
import { http_status } from "Features/shared/constants/http";


export class DailyLogHandler {
    private dailyLogService: dailyLogService;

    constructor() {
        const repository = new dailyLogRepository();
        this.dailyLogService = new dailyLogService(repository); // pass repo implementing interface
    }
    async create(req: FastifyRequest<{ Body: createDailyLog }>, res: FastifyReply): Promise<DailyLog | any> {
        const dailyLog = req.body;
        const user = req.user as { id: string };

        const userId = user.id;
        if (!dailyLog) {
            return {
                success: false,
                message: "daily log fields are require"
            }
        }

        const dailylog = await this.dailyLogService.dailyLogCreateService(dailyLog, userId);
        return {
            success: true,
            message: "Daily Log created successfully.",
            dailylog
        }
    }
    async getDailyLog(
        req: FastifyRequest<{
            Querystring: {
                date: string;
            };
        }>,
        res: FastifyReply
    ) {
        const { date } = req.query;

        if (!date) {
            return res.code(http_status.BadRequest).send({
                success: false,
                message: "Date is required.",
            });
        }
        const user = req.user as { id: string };
        const dailylog = await this.dailyLogService.getDailyLogService(
            date,
            user.id
        );

        return {
            success: true,
            message: "Get DailyLog successfully.",
            dailylog,
        };
    }

}