import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { FoodService } from "./food.service";
import { foodSchema } from "./schemas/food.schema";
import { ResponseFood } from "./types/food.type";
import { FromSchema } from "json-schema-to-ts";
import { http_status } from "../../Features/shared/constants/http";

export type CreateFoodBody = FromSchema<
    typeof foodSchema.create.schema.body
>;
type foodParams = {
    page: number;
    limit: number;
}
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
        if (!foodData) {
            return reply.status(http_status.BadRequest).send({
                success: false,
                message: "Food Data Required!"
            })
        }
        const user = request.user as { id: string };
        if (!user) {
            return reply.status(http_status.Unauthorized).send({
                success: false,
                message: "User Not Authenticated!"
            })
        }
        const userId = user.id;
        const food = await this.foodService.createFood(foodData, userId); // ✅ use userId
        if (!food || food.success === false) {
            return reply.status(http_status.Forbidden).send({
                success: false, message: food.message || "Failed to create food"
            });
        }
        return {
            success: true,
            message: "Food Created Successfully",
            food
        };
    };
    getfood = async (
        req: FastifyRequest<{ Params: foodParams }>,
        res: FastifyReply
    ) => {
        const { page, limit } = req.params;

        const food = await this.foodService.getFoodService(page, limit);

        const foods = food.foods;
        const meta = food.meta;

        if (foods.length > 0) {
            return res.status(http_status.Success).send({
                success: true,
                message: "Get Food Successfully",
                data: {
                    foods,
                    meta,
                },
            });
        }

        return res.status(http_status.NotFound).send({
            success: false,
            message: "No food found",
            data: {
                data: [],
                meta,
            },
        });
    };

    getSuggestionFood = async (req: FastifyRequest<{ Querystring: { name: string } }>, res: FastifyReply) => {
        const name = req.query.name;
        const foods = await this.foodService.getSuggestFoodService(name);
        if (foods.length <= 0) {
            return res.status(http_status.BadRequest).send({
                success: false,
                message: "Foods Are Empty",
            })
        }
        return res.status(http_status.Success).send({
            success: true,
            message: "Foods Suggestion successfully",
            foods
        })
    }
    foodById = async (req: FastifyRequest<{ Params: { foodId: string } }>, res: FastifyReply) => {
        const foodId = req.params.foodId;
        const food = await this.foodService.getFoodByIdService(foodId);
        if (!food) {
            return res.status(http_status.NotFound).send({
                success: false,
                message: "Food Not Found",
            })
        }
        return res.status(http_status.Success).send({
            success: true,
            message: "Food Found Successfully",
            data: food
        })
    }
}