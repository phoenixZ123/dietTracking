import { FastifyInstance } from "fastify";
import { MealHandler } from "./meal.handler";

const mealHandler = new MealHandler();
export default async function MealRoute(fastify: FastifyInstance) {
    fastify.post("/get-meal", mealHandler.getMealHandler);
}