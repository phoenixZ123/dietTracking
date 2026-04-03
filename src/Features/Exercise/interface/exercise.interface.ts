import { Exercise, WorkoutLog } from "../../../../generated/main";
import { createExercise, UserWorkOutLog } from "../types/exercise";

export interface IExerciseRepository {
    createExercise(exerciseData: createExercise): Promise<Exercise>;
    UserExercise(ucdata: UserWorkOutLog, userId: string): Promise<WorkoutLog | null>;
    getDailyExercisesScopeMultiDay(userId: string): Promise<any>;
    getDailyBurnedCalories(userId: string):Promise<any>;
    getUser(userId: string): Promise<any> ;
}