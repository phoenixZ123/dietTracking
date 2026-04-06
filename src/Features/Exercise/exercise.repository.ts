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
        const workout = await mainDb.workoutLog.create({
            data: {
                dailyLogId: ucdata.dailyLogId,
                exerciseId: ucdata.exerciseId,
                durationMin: ucdata.durationMin,
                userId
            },
            include: { exercise: true, dailyLog: { select: { date: true } } }
        });

        // 2️⃣ Calculate burned calories
        const burnedCalories = workout.exercise.caloriesBurnedPerMin * workout.durationMin;

        // 3️⃣ Update total calories in daily log
        await mainDb.weightLog.update({
            where: {
                userId_date: {  // compound unique key
                    userId: userId,
                    date: workout.dailyLog.date
                }
            },
            data: { totalBurnCalories: { increment: burnedCalories } }
        });

        return workout;
    }

    async getDailyBurnedCalories(userId: string): Promise<{
        daily: caloriesResponse[];
        totalCalories: number;
    }> {
        const logs = await mainDb.workoutLog.findMany({
            where: { userId },
            orderBy: { created_at: "desc" },
            select: {
                created_at: true,
                durationMin: true,
                exercise: {
                    select: {
                        name: true,
                        caloriesBurnedPerMin: true
                    }
                }
            }
        });

        const dailyMap: Record<string, caloriesResponse> = {};
        let totalCalories = 0;

        logs.forEach((log) => {
            const date = new Date(log.created_at).toISOString().split("T")[0];

            const burned =
                log.durationMin * (log.exercise?.caloriesBurnedPerMin ?? 0);

            // ✅ total calories (all-time)
            totalCalories += burned;
            // ✅ group by date
            if (!dailyMap[date]) {
                dailyMap[date] = {
                    date: new Date(log.created_at),
                    exercise: "multiple", // since grouped
                    burnedCalories: 0,
                    totalDuration: 0
                };
            }

            dailyMap[date].burnedCalories += burned;
            dailyMap[date].totalDuration += log.durationMin;
        });

        return {
            daily: Object.values(dailyMap).sort(
                (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            ),
            totalCalories
        };
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