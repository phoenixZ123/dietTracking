import { workoutData } from "./types/workout";
import { IWorkoutLogRepository } from "./workoutlog.interface";

export  class WorkoutLogService {
    constructor(private workoutLogRepository: IWorkoutLogRepository) {}
    async createWorkoutLog(workoutData: workoutData, userId: string) {
        return this.workoutLogRepository.createWorkoutLog(workoutData, userId);
    }
    async getWorkoutLogsByDate(date: string, userId: string) {
        return this.workoutLogRepository.getWorkoutLogsByDate(date, userId);
    }
}