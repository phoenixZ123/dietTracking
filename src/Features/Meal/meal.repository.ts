import { prisma } from "../../config/db.config";
import { IMealRepository } from "./interface/meal.interface";
import { Meal, MealItem } from "@prisma/client";

export class mealRepository implements IMealRepository {

    async createMeal(
        data: { mealId: string; foodId: string; quantity: number },
        userId: string
    ): Promise<any> {

        const { mealId, foodId, quantity } = data;

        // 1️⃣ Fetch the food
        const food = await prisma.food.findUnique({
            where: { id: foodId }
        });
        if (!food) throw new Error("Food not found");

        // 2️⃣ Fetch the Meal with its DailyLog to get the date
        const meal = await prisma.meal.findUnique({
            where: { id: mealId },
            include: {
                dailyLog: true
            }
        });
        if (!meal) throw new Error("Meal not found");

        const logDate = meal.dailyLog.date; // Use the DailyLog's date

        // 3️⃣ Calculate nutrition based on quantity
        const factor = quantity / food.servingSize;
        const totalCalories = food.calories * factor;
        const totalProtein = food.protein * factor;
        const totalCarbs = food.carbs * factor;
        const totalFat = food.fat * factor;

        // 4️⃣ Create MealItem
        const mealItem = await prisma.mealItem.create({
            data: {
                mealId,
                foodId,
                quantity,
                userId,
            },
            include: {
                meal: true,
                food: true,
                user: true,

            },
        });

        // 5️⃣ Insert into CaloriesLog using DailyLog's date
        const caloriesLog = await prisma.caloriesLog.create({
            data: {
                userId,
                mealId,
                date: logDate,           // <-- important change
                meal: meal.name,
                foodName: food.name,
                quantity,
                totalCalories,
                totalProtein,
                totalCarbs,
                totalFat,
            },
        });

        return { mealItem, caloriesLog };
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