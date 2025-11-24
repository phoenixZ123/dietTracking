import { IFoodRepository } from "./food.interface";
import { FoodRepository } from "./food.repository";
import { Food } from "@prisma/client";

export class FoodService {
    private foodRepository: IFoodRepository;

    constructor() {
        this.foodRepository = new FoodRepository();
    }

    // Create a new food
    async createFood(
        data: Omit<Food, "id" | "created_at" | "updated_at">
    ): Promise<Food> {
        return this.foodRepository.create(data);
    }

    // Get all foods
    async getFoods(): Promise<Food[]> {
        return this.foodRepository.getFoods();
    }

    // Get single food by ID
    async getFood(id: string): Promise<Food | null> {
        return this.foodRepository.getFoodById(id);
    }

    // Update food
    async updateFood(
        id: string,
        data: Partial<Omit<Food, "id" | "created_at" | "updated_at">>
    ): Promise<Food> {
        return this.foodRepository.updateFood(id, data);
    }

    // Delete food
    async deleteFood(id: string): Promise<Food> {
        return this.foodRepository.deleteFood(id);
    }
}
