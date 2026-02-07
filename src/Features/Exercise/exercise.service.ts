import { Exercise, WorkoutLog } from "@prisma/client";
import { ExerciseRepository } from "./exercise.repository";
import { IExerciseRepository } from "./interface/exercise.interface";
import { createExercise, UserWorkOutLog } from "./types/exercise";

export class ExerciseService {
    private exerciseRepository: IExerciseRepository;
    constructor() {
        this.exerciseRepository = new ExerciseRepository();
    }
    /**
     * 
     * @param data - name ,caloriesBurnedPerMin
     * @returns 
     */
    async createExercise(data: createExercise): Promise<Exercise> {
        return this.exerciseRepository.createExercise(data);
    }
    /**
     * 
     * @param data -  date , exerciseId, durationMin
     * @param userId - user auth
     * @returns 
     */
    async createUserWorkOutLog(data: UserWorkOutLog, userId: string): Promise<WorkoutLog> {
        return this.exerciseRepository.UserExercise(data, userId);
    }
    async getDailyExercise(userId: string) {
        return this.exerciseRepository.getDailyExercisesScopeMultiDay(userId);
    }
    async getDailyBurnedService(userId: string) {
        return this.exerciseRepository.getDailyBurnedCalories(userId);
    }
}