import { prisma } from "config/db.config";
import { IFoodRepository } from "./food.interface";
import { foodRepository } from "./food.repository";
import { CreateFoodBody } from "./schemas/food.schema";
import { Food } from "@prisma/client";


export class FoodService {
  private foodRepository: IFoodRepository;
  constructor() {
    this.foodRepository = new foodRepository();
  }
  async createFood(foodData: CreateFoodBody | CreateFoodBody[],
    userId: string): Promise<any> {
    return this.foodRepository.foodCreate(foodData, userId);
  }
  async getSuggestFoodService(name: string): Promise<Food[] | any> {
    return this.foodRepository.getSuggestionFood(name);
  }
  async getFoodService(page: number, limit: number) {
    return this.foodRepository.getFood(page, limit);
  }
  async getFoodByIdService(foodId: string) {
    return this.foodRepository.getFoodById(foodId);

  }
}
