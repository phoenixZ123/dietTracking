import { Exercise, WorkoutLog } from "../../../generated/main";
import { ExerciseRepository } from "./exercise.repository";
import { IExerciseRepository } from "./interface/exercise.interface";
import { createExercise, UserWorkOutLog } from "./types/exercise";

interface ServiceError extends Error {
    statusCode?: number;
}
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
    async createExercise(data: createExercise, userId: string): Promise<Exercise> {
        const user = await this.exerciseRepository.getUser(userId.toString());
        if (!user) {
            const error: ServiceError = new Error("User not found");
            error.statusCode = 404; // Not Found
            throw error;
        }
        if (user.role.id !== 1) {
            const error: ServiceError = new Error("Only admin can create exercise");
            error.statusCode = 403; // Forbidden
            throw error;
        }
        return this.exerciseRepository.createExercise(data);
    }
    /**
     * 
     * @param data -  date , exerciseId, durationMin
     * @param userId - user auth
     * @returns 
     */
    async createUserWorkOutLog(data: UserWorkOutLog, userId: string): Promise<WorkoutLog | null> {
        return this.exerciseRepository.UserExercise(data, userId);
    }
    async getDailyExercise(userId: string) {
        return this.exerciseRepository.getDailyExercisesScopeMultiDay(userId);
    }
    async getDailyBurnedService(userId: string) {
        return this.exerciseRepository.getDailyBurnedCalories(userId);
    }
}