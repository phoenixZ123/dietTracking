import { mainDb } from "config/db.config";
import { IExerciseRepository } from "./interface/exercise.interface";
import { createExercise, UserWorkOutLog } from "./types/exercise";
import { Exercise, WorkoutLog } from "../../../generated/main";

interface caloriesResponse {
    date: Date;
    exercise?: string;
    burnedCalories: number;
    totalDuration: number;
}

interface getUserResponse {
    id: string;
    email: string | null;
    phone_no: string | null;
    name: string;
    role: { id: number; name: string };
    created_at: Date;
    updated_at: Date;
}

export class ExerciseRepository implements IExerciseRepository {
    async createExercise(exerciseData: createExercise): Promise<Exercise> {
        return mainDb.exercise.create({
            data: {
                name: exerciseData.name,
                caloriesBurnedPerMin: exerciseData.caloriesBurnedPerMin
            }
        });
    }

    async getUser(userId: string): Promise<getUserResponse | null> {
        return mainDb.user.findUnique({
            where: { id: userId },
            include: { role: true },
        });
    }

    async UserExercise(ucdata: UserWorkOutLog, userId: string): Promise<WorkoutLog | null> {
        if (!ucdata.dailyLogId) {
          return null;
        }
        return mainDb.workoutLog.create({
            data: {
                dailyLogId: ucdata.dailyLogId,
                exerciseId: ucdata.exerciseId,
                durationMin: ucdata.durationMin,
                userId
            },
            include: {
                exercise: true,
                dailyLog:true
            }
        });
    }

    async getDailyBurnedCalories(userId: string): Promise<caloriesResponse[]> {
        const logs = await mainDb.workoutLog.findMany({
            where: { userId },
            orderBy: { created_at: "desc" }, // use created_at instead of date
            include: { exercise: true }
        });

        return logs.map(log => ({
            date: log.created_at,
            exercise: log.exercise.name,
            burnedCalories: log.exercise.caloriesBurnedPerMin * log.durationMin,
            totalDuration: log.durationMin
        }));
    }

    async getDailyExercisesScopeMultiDay(userId: string): Promise<any> {
        const logs = await mainDb.workoutLog.findMany({
            where: { userId },
            include: { exercise: true },
            orderBy: { created_at: "asc" }
        });

        const dailyMap: Record<string, Record<string, any>> = {};

        for (const log of logs) {
            const day = log.created_at.toISOString().split("T")[0];

            if (!dailyMap[day]) dailyMap[day] = {};

            if (!dailyMap[day][log.exerciseId]) {
                dailyMap[day][log.exerciseId] = {
                    exerciseName: log.exercise.name,
                    totalDurationMin: 0,
                    caloriesBurned: 0
                };
            }

            dailyMap[day][log.exerciseId].totalDurationMin += log.durationMin;
            dailyMap[day][log.exerciseId].caloriesBurned += log.durationMin * log.exercise.caloriesBurnedPerMin;
        }

        return Object.entries(dailyMap).map(([day, exercises]) => ({
            date: day,
            exercises: Object.values(exercises),
            totalCaloriesBurned: Object.values(exercises).reduce((sum, ex) => sum + ex.caloriesBurned, 0)
        }));
    }
}