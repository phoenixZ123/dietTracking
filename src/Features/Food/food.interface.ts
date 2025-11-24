import { Food } from "@prisma/client";

export interface IFoodRepository {
    create(foodData: Omit<Food, "id" | "created_at" | "updated_at">): Promise<Food>;
    getFoods(): Promise<Food[]>;
    getFoodById(id: string): Promise<Food | null>;
    updateFood(id: string, data: Partial<Omit<Food, "id" | "created_at" | "updated_at">>): Promise<Food>;
    deleteFood(id: string): Promise<Food>;
}
