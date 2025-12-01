import { FastifyRequest, FastifyReply } from "fastify";
import { FoodService } from "./food.service";
import { http_status } from "Features/shared/constants/http";
import { Food } from "@prisma/client";

const foodService = new FoodService();

export class FoodHandler {

    // Create a new food
    async create(
        req: FastifyRequest<{ Body: Omit<Food, "id" | "created_at" | "updated_at"> }>,
        reply: FastifyReply
    ) {
        try {
            const food = await foodService.createFood(req.body);
            return reply.send({
                success: true,
                message: "Food created successfully",
                data: food
            });
        } catch (err) {
            return reply
                .status(http_status.InternalServerError)
                .send({ success: false, message: String(err) });
        }
    }

    // List all foods
    async list(req: FastifyRequest, reply: FastifyReply) {
        try {
            const foods = await foodService.getFoods();
            return reply.send({ success: true, data: foods });
        } catch (err) {
            return reply
                .status(http_status.InternalServerError)
                .send({ success: false, message: String(err) });
        }
    }

    // Get single food by ID
    async get(
        req: FastifyRequest<{ Params: { id: string } }>,
        reply: FastifyReply
    ) {
        try {
            const food = await foodService.getFood(req.params.id);
            if (!food) {
                return reply.status(http_status.NotFound).send({ success: false, message: "Food not found" });
            }
            return reply.send({ success: true, message: "Get food detail successfully", data: food });
        } catch (err) {
            return reply
                .status(http_status.InternalServerError)
                .send({ success: false, message: String(err) });
        }
    }

    // Update food by ID
    async update(
        req: FastifyRequest<{ Params: { id: string }; Body: Partial<Omit<Food, "id" | "created_at" | "updated_at">> }>,
        reply: FastifyReply
    ) {
        try {
            const updated = await foodService.updateFood(req.params.id, req.body);
            return reply.send({ success: true, message: "Food update successfully", data: updated });
        } catch (err) {
            return reply
                .status(http_status.InternalServerError)
                .send({ success: false, message: String(err) });
        }
    }

    // Delete food by ID
    async delete(
        req: FastifyRequest<{ Params: { id: string } }>,
        reply: FastifyReply
    ) {
        try {
            await foodService.deleteFood(req.params.id);
            return reply.send({ success: true, message: "Food deleted successfully" });
        } catch (err) {
            return reply
                .status(http_status.InternalServerError)
                .send({ success: false, message: String(err) });
        }
    }
}
