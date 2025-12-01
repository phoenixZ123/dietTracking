import { DailyLog } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";

export class DailyLogHandler {
    async create(req: FastifyRequest, res: FastifyReply): Promise<DailyLog | any> {

    }
}