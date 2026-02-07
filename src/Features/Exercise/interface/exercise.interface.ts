import { Exercise, WorkoutLog } from "@prisma/client";
import { createExercise, UserWorkOutLog } from "../types/exercise";

export interface IExerciseRepository {
    createExercise(exerciseData: createExercise): Promise<Exercise>;
    UserExercise(ucdata: UserWorkOutLog, userId: string): Promise<WorkoutLog>;
    getDailyExercisesScopeMultiDay(userId: string): Promise<any>;
    getDailyBurnedCalories(userId: string):Promise<any>;
}