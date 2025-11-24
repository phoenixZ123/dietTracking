import { Food, Prisma } from "@prisma/client";
import { IFoodRepository } from "./food.interface";
import { prisma } from "config/db.config";



type FoodInput = Omit<Prisma.FoodCreateInput, "id" | "created_at" | "updated_at">;
export class FoodRepository implements IFoodRepository {

    async create(data: FoodInput): Promise<Food> {
        return prisma.food.create({
            data
        });
    }

    async getFoods(): Promise<Food[]> {
        return prisma.food.findMany({ orderBy: { created_at: "desc" } });
    }

    async getFoodById(id: string): Promise<Food | null> {
        return prisma.food.findUnique({ where: { id } });
    }

    async updateFood(
        id: string,
        data: Partial<Omit<Food, "id" | "created_at" | "updated_at">>
    ): Promise<Food> {
        return prisma.food.update({ where: { id }, data });
    }

    async deleteFood(id: string): Promise<Food> {
        return prisma.food.delete({ where: { id } });
    }
}
