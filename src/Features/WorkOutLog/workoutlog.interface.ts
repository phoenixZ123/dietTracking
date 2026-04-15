import { workoutData, workoutResponseData } from "./types/workout";

export interface IWorkoutLogRepository {
   createWorkoutLog(workoutData: workoutData, userId: string): Promise<workoutResponseData | any>
   getWorkoutLogsByDate(date: string, userId: string): Promise<workoutResponseData[]>
}