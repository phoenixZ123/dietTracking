import { prisma } from "config/db.config";
import { Food } from "./entities/food.entity";
import { ResponseFood } from "./types/food.type";

type CreateFoodInput = Omit<Food, "id" | "uuid" | "created_at" | "updated_at" | "mealItems">;

export class FoodService {
  async foodCreate(foodData: CreateFoodInput, userId: string): Promise<ResponseFood | any> {
    try {
      const food = await prisma.food.create({
        data: {
          ...foodData,  // all fields like name, calories, protein, etc.
          userId,       // UUID of logged-in user
        }
      });
      return food;
    } catch (error) {
      console.error("Error creating food:", error);
      throw error; // or return a structured error
    }
  }

}
