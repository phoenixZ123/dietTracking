import { IMealRepository } from "./interface/meal.interface";
import { mealRepository } from "./meal.repository";

export class MealService {
    private mealRepository: IMealRepository;
    constructor() {
        this.mealRepository = new mealRepository();
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