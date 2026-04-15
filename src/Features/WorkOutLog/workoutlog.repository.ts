import { mainDb } from "config/db.config";
import { workoutData, workoutResponseData } from "./types/workout";
import { IWorkoutLogRepository } from "./workoutlog.interface";

export class WorkoutRepository implements IWorkoutLogRepository {
    async createWorkoutLog(workoutData: workoutData, userId: string): Promise<workoutResponseData | any> {
        await mainDb.workoutLog.create({
            data: {
                dailyLogId: workoutData.dailyLogId,
                durationMin: workoutData.durationMin,
                exerciseId: workoutData.exerciseId,
                userId: userId
            },
            include:{ exercise: true, dailyLog: { select: { date: true } } }
        })
    }
    async getWorkoutLogsByDate(date: string, userId: string): Promise<workoutResponseData[]> {
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);
        return await mainDb.workoutLog.findMany({
            where: {
                userId: userId,
                createdAt: {
                    gte: startOfDay,
                    lte: endOfDay
                }
            },
            include: { exercise: true, dailyLog: { select: { date: true } } }
        });
    }
}