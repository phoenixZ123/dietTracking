import { FastifyInstance } from "fastify";
import { FoodHandler } from "./food.handler";

const handler = new FoodHandler();

export default async function foodRoutes(fastify: FastifyInstance) {

    fastify.post("/create", handler.create);

    fastify.get("/all", handler.list);

    fastify.get("/fid/:id", handler.get);

    fastify.put("/update/:id", handler.update);

    fastify.delete("/foods/:id", handler.delete);
}
