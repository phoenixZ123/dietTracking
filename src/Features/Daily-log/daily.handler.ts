import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { dailyLogService } from "./daily-log.service";
import { dailyLogRepository } from "./daily-log.repository";
import { createDailyLog } from "./type/dailylog";
import { http_status } from "../../Features/shared/constants/http";
import { DailyLog } from "../../../generated/main";


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

        const logDetail = await this.dailyLogService.dailyLogCreateService(dailyLog, userId);
        return {
            success: true,
            message: "Daily Log created successfully.",
            logDetail
        }
    }
    async getDailyLog(
        req: FastifyRequest<{
            Params: {
                date: string;
            };
        }>,
        res: FastifyReply
    ) {
        const { date } = req.params;
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
        if (dailylog == null) {
            return {
                success: false,
                message: "Daily Log Not Found"
            }
        }
        return {
            success: true,
            message: "Get DailyLog successfully.",
            data:dailylog,
        };
    }
    async getDateUserId(req: FastifyRequest, res: FastifyReply) {
        const user = req.user as { id: string };
        if (!user) {
            return res.status(http_status.Unauthorized).send({
                success: false,
                message: "User need to authorize"
            })
        }
        const date = await this.dailyLogService.getDateByUId(user.id);
        return res.status(http_status.Success).send({
            success: true,
            message: "Get User 's dailylog date successfully",
            date
        })

    }

}