import { FastifyInstance } from "fastify";
import { MealHandler } from "./meal.handler";
import { mealItemSchema } from "./schemas/meal.schema";

const mealHandler = new MealHandler();
export default async function MealRoute(fastify: FastifyInstance) {
    fastify.post("/get-meal", mealHandler.getMealHandler);
    fastify.post("/create-meal",mealItemSchema.create,mealHandler.createMeal);
    fastify.get("/user-meal",mealHandler.getUserDailyMeal);
}