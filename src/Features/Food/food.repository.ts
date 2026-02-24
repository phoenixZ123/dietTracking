import { Food } from "@prisma/client";
import { prisma } from "config/db.config";
import { CreateFoodBody } from "./schemas/food.schema";
import { ResponseFood } from "./types/food.type";
import { IFoodRepository } from "./food.interface";

export class foodRepository implements IFoodRepository {
    async foodCreate(
        foodData: CreateFoodBody | CreateFoodBody[],
        userId: string
    ): Promise<ResponseFood | any> {

        const foods = Array.isArray(foodData) ? foodData : [foodData];
        const foodsWithUser: any = foods.map(f => ({ ...f, userId }));

        const createdFoods = await Promise.all(
            foodsWithUser.map((food: any) => prisma.food.create({ data: food }))
        );
        return {
            count: createdFoods.length,
            data: Array.isArray(foodData) ? createdFoods : createdFoods[0]
        };

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
            take: 10 // optional: limit results
        });

        return foods;
    }
    async getFood(page: number, limit: number): Promise<any> {
        const pagee = Math.max(1, Number(page) || 1);
        const limitt = Math.min(50, Math.max(1, Number(limit) || 10));

        const skip = (pagee - 1) * limitt;

        const [foods, total] = await prisma.$transaction([
            prisma.food.findMany({
                skip,
                take: limitt,
                orderBy: { created_at: "desc" },
            }),
            prisma.food.count(),
        ]);

        return {
            foods,
            meta: {
                page: pagee,
                limit: limitt,
                total,
                totalPages: Math.ceil(total / limitt),
            },
        };

    }
    async getFoodById(foodId: string): Promise<any> {
        return await prisma.food.findFirst({
            where: {
                id: foodId
            }
        });
    }
}