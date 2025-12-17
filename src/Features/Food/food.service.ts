import { AppDataSource } from "config/db/db.config";
import { Food } from "./entities/food.entity";
import { ResponseFood } from "./types/food.type";

type CreateFoodInput = Omit<Food, "id"  | "uuid" | "created_at" | "updated_at" | "mealItems">;

export class FoodService {
  async foodCreate(foodData: CreateFoodInput): Promise<ResponseFood | any> {
    try {
      const foodRepo = AppDataSource.getRepository(Food);
      const newFood = foodRepo.create(foodData); // create instance
      return await foodRepo.save(newFood);       // save to DB
    } catch (error) {

    }
  }
}
