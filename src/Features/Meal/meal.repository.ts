import { prisma } from "../../config/db.config";
import { IMealRepository } from "./interface/meal.interface";
import { Meal, MealItem } from "@prisma/client";

export class mealRepository implements IMealRepository {

    async createMeal(
        data: { mealId: string; foodId: string; quantity: number },
        userId: string
    ): Promise<any> {

        // Create MealItem with relations
        return prisma.mealItem.create({
            data: {
                ...data,
                userId,
            },
            include: {
                meal: true,
                food: true,
                user: true,
            },
        });
    }

    async getMeal(logId: string): Promise<any> {
        const meal = await prisma.meal.findMany({ where: { logId } })
        if (meal.length == 0) return null;
        return meal;
    }
    async getUserDailyMeal(mealId: string, userId: string) {
        const mealItems = await prisma.mealItem.findMany({
            where: {
                userId,
                mealId
            },
            include: {
                food: true,
                meal: { select: { name: true, dailyLog: { select: { date: true } } } },
            }
        });

        // Calculate calories per meal item
        const mealItemsWithCalories = mealItems.map(item => {
            const itemCalories = (item.quantity / item.food.servingSize) * item.food.calories;
            return {
                ...item,
                calories: itemCalories
            };
        });

        // Calculate total calories for the meal
        const totalCalories = mealItemsWithCalories.reduce((sum, item) => sum + item.calories, 0);

        // Return in one clean scope
        return {
            mealId,
            mealName: mealItems[0]?.meal.name ?? null,
            date: mealItems[0]?.meal.dailyLog.date ?? null,
            totalCalories,
            items: mealItemsWithCalories // optional: include each item if you want
        };
    }

}