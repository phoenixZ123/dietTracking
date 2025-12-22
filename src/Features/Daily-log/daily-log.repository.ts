import { DailyLog, Meal } from "@prisma/client";
import { IDailyLogRepository } from "./daily-log.interface";
import { prisma } from "config/db.config";
import { createDailyLog, CreateMealInput, DailyLogResponse } from "./type/dailylog";

export class dailyLogRepository implements IDailyLogRepository {

    async createDailyLog(data: createDailyLog, userId: string): Promise<any> {
        const dailyLog = await prisma.dailyLog.create({
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

        const log = await prisma.dailyLog.findFirst({
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


}

