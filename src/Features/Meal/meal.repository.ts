import { mainDb } from "../../config/db.config";
import { IMealRepository } from "./interface/meal.interface";

export class mealRepository implements IMealRepository {

    async createMeal(
        data: { mealId: string; foodId: string; quantity: number },
        userId: string
    ): Promise<any> {

        const { mealId, foodId, quantity } = data;

        // 1️⃣ Fetch the food
        const food = await mainDb.food.findUnique({
            where: { id: foodId }
        });
        if (!food) throw new Error("Food not found");

        // 2️⃣ Fetch the Meal with its DailyLog to get the date
        const meal = await mainDb.meal.findUnique({
            where: { id: mealId },
            include: { dailyLog: true }
        });
        if (!meal) throw new Error("Meal not found");

        const logDate = meal.dailyLog.date;

        // 3️⃣ Calculate nutrition
        const factor = quantity / food.servingSize;
        const totalCalories = food.calories * factor;
        const totalProtein = food.protein * factor;
        const totalCarbs = food.carbs * factor;
        const totalFat = food.fat * factor;

        // 4️⃣ Create MealItem
        const mealItem = await mainDb.mealItem.create({
            data: {
                mealId,
                foodId,
                quantity,
                userId
            }
        });

        // 5️⃣ Insert into CaloriesLog using DailyLog's date
        const caloriesLog = await mainDb.caloriesLog.create({
            data: {
                userId,
                mealId,
                date: logDate,
                meal: meal.name,
                foodName: food.name,
                quantity,
                totalCalories,
                totalProtein,
                totalCarbs,
                totalFat
            }
        });

        // ===============================
        // 🔥 WEIGHT CALCULATION SECTION
        // ===============================

        // 6️⃣ Get user profile
        const profile = await mainDb.profile.findUnique({
            where: { userId }
        });

        if (!profile || !profile.weightLb || !profile.heightCm || !profile.birthDate) {
            return { mealItem }; // not enough data to calculate weight
        }

        // 7️⃣ Calculate age
        const today = new Date();
        const age = today.getFullYear() - profile.birthDate.getFullYear();

        // 8️⃣ Convert lb → kg
        const weightKg = profile.weightLb / 2.20462;

        // 9️⃣ Calculate BMR (Mifflin-St Jeor)
        let BMR = 0;

        if (profile.gender === "MALE") {
            BMR = (10 * weightKg) + (6.25 * profile.heightCm) - (5 * age) + 5;
        } else {
            BMR = (10 * weightKg) + (6.25 * profile.heightCm) - (5 * age) - 161;
        }

        // 🔟 Apply activity multiplier
        let activityMultiplier = 1.2;

        switch (profile.activityLvl) {
            case "LOW":
                activityMultiplier = 1.2;
                break;
            case "MEDIUM":
                activityMultiplier = 1.55;
                break;
            case "HIGH":
                activityMultiplier = 1.725;
                break;
        }

        const TDEE = BMR * activityMultiplier;

        // 🎯 If goal is weight loss → subtract 500 calories
        const targetCaloriesPerDay =
            profile.goalWeight && profile.goalWeight < profile.weightLb
                ? TDEE - 500
                : TDEE;

        // ===============================
        // 📊 Calculate total eaten today
        // ===============================

        const dayStart = new Date(logDate);
        dayStart.setHours(0, 0, 0, 0);

        const dayEnd = new Date(logDate);
        dayEnd.setHours(23, 59, 59, 999);

        const totalCaloriesToday = await mainDb.caloriesLog.aggregate({
            _sum: { totalCalories: true },
            where: {
                userId,
                date: { gte: dayStart, lte: dayEnd }
            }
        });

        const eatenCalories = totalCaloriesToday._sum.totalCalories ?? 0;

        // ===============================
        // ⚖ Update existing WeightLog
        // ===============================

        const weightLog: any = await mainDb.weightLog.findFirst({
            where: {
                userId,
                date: { gte: dayStart, lte: dayEnd }
            }
        });

        if (weightLog) {
            const calorieDifference = eatenCalories - targetCaloriesPerDay;

            // 3500 calories ≈ 1 lb
            const weightChange = calorieDifference / 3500;

            const newWeight = weightLog?.weightLb + weightChange;

            await mainDb.weightLog.update({
                where: { id: weightLog.id },
                data: { weightLb: newWeight }
            });
            await mainDb.profile.update({
                where: { userId },
                data: { weightLb: newWeight }
            });
        }

        return {
            mealItem,
            eatenCalories: eatenCalories * (food.servingSize / 100),
            targetCaloriesPerDay
        };
    }


    async getMeal(logId: string): Promise<any> {
        const meal = await mainDb.meal.findMany({ where: { logId } })
        if (meal.length == 0) return null;
        return meal;
    }
    async getUserDailyMeal(mealId: string, userId: string) {
        const mealItems = await mainDb.mealItem.findMany({
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