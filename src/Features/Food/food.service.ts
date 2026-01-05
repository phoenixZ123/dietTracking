import { prisma } from "config/db.config";
import { ResponseFood } from "./types/food.type";
import { CreateFoodBody } from "./schemas/food.schema";


export class FoodService {
  async foodCreate(foodData: CreateFoodBody, userId: string): Promise<ResponseFood | any> {
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
