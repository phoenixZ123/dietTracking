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
    async getUserDailyMeal(mealId: string,
        userId: string): Promise<MealItem[] | any> {
        const meal_item = prisma.mealItem.findMany({
            where: {
                AND: { user: { id: userId } }, meal: { id: mealId }
            }, include: {
                food: true,
                meal: true,
                user: true
            }
        });
        return meal_item;
    }
}