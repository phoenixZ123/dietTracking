import { prisma } from "config/db.config";
import { Food } from "./entities/food.entity";
import { ResponseFood } from "./types/food.type";

type CreateFoodInput = Omit<Food, "id" | "uuid" | "created_at" | "updated_at" | "mealItems">;

export class FoodService {
  async foodCreate(foodData: CreateFoodInput): Promise<ResponseFood | any> {
    try {
      const food = await prisma.food.create({ data: foodData });
      return food;       // save to DB
    } catch (error) {

    }
  }
}
