import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export class DailyLogService {
    async create(data: any) {
        return prisma.dailyLog.create({ data });
    }

    async findAll(userId: string) {
        return prisma.dailyLog.findMany({ where: { userId }, include: { meals: true } });
    }

    async update(id: string, data: any) {
        return prisma.dailyLog.update({ where: { id }, data });
    }

    async delete(id: string) {
        return prisma.dailyLog.delete({ where: { id } });
    }
}
