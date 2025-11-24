import { FastifyInstance } from "fastify";
import { FoodHandler } from "./food.handler";

const handler = new FoodHandler();

export default async function foodRoutes(fastify: FastifyInstance) {

    fastify.post("/create", handler.create);

    fastify.get("/foods", handler.list);

    fastify.get("/foods/:id", handler.get);

    fastify.put("/foods/:id", handler.update);

    fastify.delete("/foods/:id", handler.delete);
}
