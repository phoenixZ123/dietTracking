import { MealService } from "./meal.service";
import { FastifyReply, FastifyRequest } from "fastify";
import { http_status } from "Features/shared/constants/http";
import { mainDb } from "config/db.config";
import { Meal } from "../../../generated/main";

const mealService = new MealService();

export class MealHandler {
    async createMeal(req: FastifyRequest<{
        Body: {
            mealId: string,
            foodId: string,
            quantity: number
        }
    }>, res: FastifyReply): Promise<any> {
        const user = req.user as { id: string };
        const body = req.body;

        const mealdata = mainDb.meal.findUnique({ where: { id: body.mealId } });

        const food = mainDb.food.findUnique({ where: { id: body.foodId } });

        // Validate user exists
        const ui = mainDb.user.findUnique({ where: { id: user.id } });
        if (!mealdata || !food || !ui) {
            return res.status(http_status.BadRequest).send({
                success: false,
                message: "Cannot create cuz of data required"
            })
        }
        const data = await mealService.createMeal(body, user.id);
        return {
            success: true,
            message: "Meal Created Successfully",
            data
        }
    }

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
            return res.status(http_status.BadRequest).send({
                success: false,
                message: "Meal Not Found",
            })
        }
        return {
            success: true,
            message: "Get Meal Successfully",
            meals
        }
    }
    async getUserDailyMeal(req: FastifyRequest<{ Querystring: { mealId: string } }>, res: FastifyReply) {
        const user = req.user as { id: string };
        const mealId = req.query.mealId;
        if (!mealId) {
            return res.status(http_status.BadRequest).send({
                success: false,
                message: "Meal Id required"
            })
        }
        const mealItem = await mealService.getUserDailyMeal(mealId, user.id);
        if (!mealItem) {
            res.status(http_status.Forbidden).send({
                success: false,
                message: "Meal Not Found"
            })
        }
        return res.status(http_status.Success).send({
            success: true,
            message: "Get Meal Item Successfully",
            mealItem
        })

    }
}