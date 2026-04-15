import { DailyLog } from "../../../generated/main";
import { IDailyLogRepository } from "./interface/daily-log.interface";
import { createDailyLog } from "./type/dailylog";
import { mainDb } from "../../config/db.config";
function toUTCMidnight(date: Date) {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
}
export class dailyLogRepository implements IDailyLogRepository {

    async createDailyLog(data: createDailyLog, userId: string): Promise<any> {
        // Normalize to UTC midnight

        const date = toUTCMidnight(new Date(data.date));

        const dailylog = await mainDb.dailyLog.create({
            data: {
                date: date,
                userId,
            }
        })
        const meal = await mainDb.meal.createMany({
            data: [
                { logId: dailylog.id, name: 'breakfast' },
                { logId: dailylog.id, name: 'lunch' },
                { logId: dailylog.id, name: 'dinner' },
            ]
        });
        let weightLog = await mainDb.weightLog.findUnique({
            where: {
                userId_date: {
                    userId,
                    date: date
                }
            }
        });

        if (!weightLog) {
            weightLog = await mainDb.weightLog.create({
                data: {
                    userId,
                    date: date,
                    weightLb: data.weightLb ?? 0,
                    totalBurnCalories: 0
                }
            });
        }
        const log = await mainDb.meal.findMany({
            where: {
                logId: dailylog.id
            },
            include: {
                dailyLog: { select: { date: true } }
            }
        });
        return log;
    }

    async getDailyLog(date: string, userId: string): Promise<any> {
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);

        // get all meals with items for the day
        const meals = await mainDb.meal.findMany({
            where: {
                dailyLog: {
                    userId: userId,
                    date: {
                        gte: startOfDay,
                        lte: endOfDay,
                    },
                },
            },

            include: {
                items: {
                    include: {
                        food: true,
                    },
                },
                dailyLog: {
                    select: {
                        user: true
                    }
                }
            },
        });

        // calculate total calories
        let totalCalories = 0;
        const mealsDetail = meals.map(meal => {
            const mealCalories = meal.items.reduce((sum, item) => {
                const itemCalories = item.food.calories * item.quantity / item.food.servingSize;
                totalCalories += itemCalories;
                return sum + itemCalories;
            }, 0);

            return {
                mealName: meal.name,
                calories: mealCalories,
                items: meal.items.map(item => ({
                    foodName: item.food.name,
                    quantity: item.quantity,
                    calories: item.food.calories * item.quantity / item.food.servingSize,
                })),
            };
        });

        // Return a structured object
        return {
            date,
            totalCalories,
            meals: mealsDetail,
        };
    }

    async getDateByUserId(userId: string): Promise<DailyLog[]> {
        return mainDb.dailyLog.findMany({ where: { user: { id: userId } }, include: { meals: true } })
    }
    async deleteLog(logId: string): Promise<boolean> {
        try {
            const workoutExists = await mainDb.workoutLog.findFirst({
                where: { dailyLogId: logId },
                select: { id: true }
            });

            if (workoutExists) {
                return false;
            }

            const mealItemExists = await mainDb.mealItem.findFirst({
                where: {
                    meal: {
                        logId: logId
                    }
                },
                select: { id: true }
            });

            if (mealItemExists) {
                return false;
            }

            await mainDb.dailyLog.delete({
                where: { id: logId }
            });
            await mainDb.meal.deleteMany({
                where: { dailyLog: { id: logId } }
            })

            return true;

        } catch (error: any) {
            console.error(error.message);
            return false;
        }
    }
}

