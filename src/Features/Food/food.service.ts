import { prisma } from "config/db.config";
import { ResponseFood } from "./types/food.type";
import { CreateFoodBody } from "./schemas/food.schema";
import { Food } from "@prisma/client";


export class FoodService {
  async foodCreate(
    foodData: CreateFoodBody | CreateFoodBody[],
    userId: string
  ): Promise<ResponseFood | any> {
    try {
      const foods = Array.isArray(foodData) ? foodData : [foodData];
      const foodsWithUser: any = foods.map(f => ({ ...f, userId }));

      const createdFoods = await Promise.all(
        foodsWithUser.map((food: any) => prisma.food.create({ data: food }))
      );
      return {
        count: createdFoods.length,
        data: Array.isArray(foodData) ? createdFoods : createdFoods[0]
      };
    } catch (error) {
      console.error("Error creating food:", error);
      throw error;
    }
  }
  async getFood(): Promise<any> {
    const food = prisma.food.findMany();
    return food;
  }
  async getSuggestionFood(name: string): Promise<Food[]> {
    const foods = await prisma.food.findMany({
      where: {
        OR: [
          {
            name: {
              startsWith: name,   // starts with input
              mode: "insensitive"
            }
          },
          {
            name: {
              equals: name,       // full word match
              mode: "insensitive"
            }
          }
        ]
      },
      take: 20 // optional: limit results
    });

    return foods;
  }
}
