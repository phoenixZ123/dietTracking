import { FastifyInstance } from "fastify";
import { FoodHandler } from "./food.handler";
import { foodSchema } from "./schemas/food.schema";

export default async function foodRoutes(fastify: FastifyInstance) {
  const foodHandler = new FoodHandler(fastify);

  fastify.post(
    "/create",
    foodSchema.create,
    foodHandler.createFood
  );
  fastify.get("/get-food", foodHandler.getfood);

}
