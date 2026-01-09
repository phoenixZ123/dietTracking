import { prisma } from "config/db.config";
import { IExerciseRepository } from "./interface/exercise.interface";
import { createExercise, UserWorkOutLog } from "./types/exercise";
import { Exercise, WorkoutLog } from "@prisma/client";

export class ExerciseRepository implements IExerciseRepository {
    async createExercise(exerciseData: createExercise): Promise<Exercise> {
        const exercise = prisma.exercise.create({
            data: {
                name: exerciseData.name,
                caloriesBurnedPerMin: exerciseData.caloriesBurnedPerMin
            }
        });
        return exercise;
    }
    async UserExercise(ucdata: UserWorkOutLog, userId: string): Promise<WorkoutLog> {
        const workoutDate: any = ucdata.date;
        const workoutLog = await prisma.workoutLog.create({
            data: {
                date: new Date(workoutDate),
                exerciseId: ucdata.exerciseId,
                durationMin: ucdata.durationMin,
                userId
            },
            include: {
                user: true,
                exercise: true
            }
        });
        return workoutLog;
    }
    async getDailyExercisesScopeMultiDay(userId: string): Promise<any> {
        const logs = await prisma.workoutLog.findMany({
            where: {
                userId,
            },
            include: { exercise: true },
            orderBy: { date: "asc" }
        });
        const dailyMap: Record<string, Record<string, any>> = {};

        for (const log of logs) {
            const day = new Date(log.date).toISOString().split("T")[0];

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

        // convert to array per day
        return Object.entries(dailyMap).map(([day, exercises]) => ({
            date: day,
            exercises: Object.values(exercises),
            totalCaloriesBurned: Object.values(exercises).reduce((sum, ex) => sum + ex.caloriesBurned, 0)
        }));
    }

}
