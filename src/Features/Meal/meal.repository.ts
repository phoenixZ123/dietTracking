import { prisma } from "../../config/db.config";
import { IMealRepository } from "./interface/meal.interface";
import { Meal } from "@prisma/client";

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

}