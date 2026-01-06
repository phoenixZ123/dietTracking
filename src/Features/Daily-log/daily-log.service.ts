import { DailyLog, Meal } from "@prisma/client";
import { IDailyLogRepository } from "./interface/daily-log.interface";
import { dailyLogRepository } from "./daily-log.repository";
import { createDailyLog, CreateMealInput, DailyLogResponse } from "./type/dailylog";

export class dailyLogService {
    constructor(private dailyLogRepository: IDailyLogRepository) { }
    /**
     * 
     * @param data - daily log create data
     * @param userId - daily log created user id
     * @returns - success data
     */
    async dailyLogCreateService(data: createDailyLog, userId: string): Promise<any> {
        try {
            return this.dailyLogRepository.createDailyLog(data, userId);
        } catch (error) {
            console.error("Error creating dailylog:", error);
            throw error; // or return a structured error
        }
    }
    /**
     * 
     * @param date - user's daily log date
     * @param userId - user's id
     * @returns - return daily log data
     */
    async getDailyLogService(date: string, userId: string): Promise<DailyLogResponse | any> {
        try {
            return this.dailyLogRepository.getDailyLog(date, userId);
        } catch (error) {
            console.error("Error get dailylog:", error);
        }
    }
    async getDateByUId(userId: string): Promise<DailyLog[] | any> {
        try {
            return this.dailyLogRepository.getDateByUserId(userId);
        } catch (err: any) {
            console.error("Error get user dailylog:", err.message);
        }
    }

}