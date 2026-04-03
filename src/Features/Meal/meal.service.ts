import { MealItem } from "../../../generated/main";
import { IMealRepository } from "./interface/meal.interface";
import { mealRepository } from "./meal.repository";

export class MealService {
    private mealRepository: IMealRepository;
    constructor() {
        this.mealRepository = new mealRepository();
    }
    /**
     * 
     * @param data - mealId,foodId,quantity
     * @param userId - user auth
     * @returns 
     */
    async createMeal(data: { mealId: string; foodId: string; quantity: number }, userId: string): Promise<any> {
        try {
            return this.mealRepository.createMeal(data, userId);
        } catch (err: any) {
            return {
                success: false,
                message: "Error occur in creating Meal" + err.message
            }
        }
    }
    /**
     * 
     * @param logId - daily log date by log id
     * @returns - meal log
     */
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
    /**
     * 
     * @param mealId - meal id of user eaten with breakfast lunch dinner
     * @param userId - user id
     * @returns - meal item
     */
    async getUserDailyMeal(mealId: string, userId: string): Promise<MealItem[] | any> {
        return this.mealRepository.getUserDailyMeal(mealId, userId);
    }
}