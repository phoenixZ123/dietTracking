import { prisma } from "config/db.config";
import { IMealRepository } from "./interface/meal.interface";
import { mealRepository } from "./meal.repository";

export class MealService {
    private mealRepository: IMealRepository;
    constructor() {
        this.mealRepository = new mealRepository();
    }
    async createMeal(data: { mealId: string; foodId: string; quantity: number }, userId: string):Promise<any> {
        try {
            return this.mealRepository.createMeal(data,userId);
        } catch (err: any) {
            return {
                success: false,
                message: "Error occur in creating Meal"+err.message
            }
        }
    }
    async getMealService(logId: string) {
        try {
            return this.mealRepository.getMeal(logId);
        } catch (err: any) {
            return {
                success: false,
                message: "Error get meal :" + err.message
            }
        }
    }
}