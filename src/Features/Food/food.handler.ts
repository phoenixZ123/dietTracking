import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { FoodService } from "./food.service";
import { foodSchema } from "./schemas/food.schema";
import { ResponseFood } from "./types/food.type";
import { FromSchema } from "json-schema-to-ts";

export type CreateFoodBody = FromSchema<
    typeof foodSchema.create.schema.body
>;
export class FoodHandler {
    private foodService: FoodService;

    constructor(private fastify: FastifyInstance) {
        this.foodService = new FoodService();
    }

    createFood = async (
        request: FastifyRequest<{ Body: CreateFoodBody }>,
        reply: FastifyReply
    ): Promise<ResponseFood> => {
        const foodData = request.body;
        // console.log("user id",request.user.id);
        const user = request.user as { id: string };

        const userId = user.id;
        const food = await this.foodService.foodCreate(foodData, userId); // ✅ use userId

        return {
            success: true,
            message: "Food Created Successfully",
            food
        };
    };

}
