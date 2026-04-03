import { DailyLog } from "../../../generated/main";
import { IDailyLogRepository } from "./interface/daily-log.interface";
import { createDailyLog} from "./type/dailylog";
import { mainDb } from "../../config/db.config";

export class dailyLogRepository implements IDailyLogRepository {

    async createDailyLog(data: createDailyLog, userId: string): Promise<any> {
        const dailyLog = await mainDb.dailyLog.create({
            data: {
                date: new Date(data.date),
                userId,
                meals: {
                    create: [
                        { name: "Breakfast" },
                        { name: "Lunch" },
                        { name: "Dinner" },
                    ],
                },
            },
            include: {
                meals: true, // return meals also
            },
        });

        return dailyLog;
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
        return mainDb.dailyLog.findMany({ where: { user: { id: userId } }, include: {  meals: true } })
    }
}

