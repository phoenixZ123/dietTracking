import { DailyLog, Meal } from "@prisma/client";
import { IDailyLogRepository } from "./interface/daily-log.interface";
import { createDailyLog, CreateMealInput, DailyLogResponse } from "./type/dailylog";
import { mainDb } from "config/db.config";

export class dailyLogRepository implements IDailyLogRepository {

    async createDailyLog(data: createDailyLog, userId: string): Promise<any> {
        const dailyLog = await mainDb.dailyLog.create({
            data: {
                date: new Date(data.date),
                userId,
                meals: {
                    create: [
                        { name: "Breakfast" },
                        { name: "Lunch" },
                        { name: "Dinner" },
                    ],
                },
            },
            include: {
                meals: true, // return meals also
            },
        });

        return dailyLog;
    }

    async getDailyLog(date: string, userId: string) {
        // create day range
        const start = new Date(date);
        start.setHours(0, 0, 0, 0);

        const end = new Date(date);
        end.setHours(23, 59, 59, 999);

        const log = await mainDb.dailyLog.findFirst({
            where: {
                userId,               // ✅ simple & correct
                date: {
                    gte: start,
                    lte: end,
                },
            },
            include: {
                meals: true,          // ✅ no second query needed
            },
        });

        if (!log) return null;

        return {
            id: log.id,
            date: log.date.toISOString(),
            userId: log.userId,
            meals: log.meals,
        };
    }

    async getDateByUserId(userId: string): Promise<DailyLog[]> {
        return mainDb.dailyLog.findMany({ where: { user: { id: userId } }, include: { user: true, meals: true } })
    }
}

