import { Meal } from "@prisma/client";
import { MealService } from "./meal.service";
import { FastifyReply, FastifyRequest } from "fastify";

const mealService = new MealService();

export class MealHandler {
    async getMealHandler(req: FastifyRequest<{
        Body: {
            logId: string
        }
    }>, res: FastifyReply): Promise<any | Meal> {
        const logid = req.body.logId;

        if (!logid) {
            return {
                success: false,
                message: "Log Id field is required"
            }
        }
        const meals = await mealService.getMealService(logid);
        if (meals == null) {
            return {
                success: false,
                message: "Meal Not Found",
            }
        }
        return {
            success: true,
            message: "Get Meal Successfully",
            meals
        }
    }
}