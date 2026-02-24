import { DailyLog, Meal } from "@prisma/client";
import { createDailyLog, CreateMealInput, DailyLogResponse } from "../type/dailylog";

export interface IDailyLogRepository {
createDailyLog(data: createDailyLog, userId: string): Promise<any>;
getDailyLog(date: string, userId: string): Promise<DailyLogResponse | any>;
getDateByUserId(userId: string):Promise<DailyLog[]>;
}
