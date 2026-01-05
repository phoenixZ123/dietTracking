import { FastifySchema } from "fastify";

export const mealItemSchema = {
  create: {
    schema: {
      body: {
        type: "object",
        required: ["mealId", "foodId", "quantity"],
        properties: {
          mealId: {
            type: "string",
            format: "uuid",
          },
          foodId: {
            type: "string",
            format: "uuid",
          },
          quantity: {
            type: "number",
            minimum: 1,
          },
        },
        additionalProperties: false,
      },

      response: {
        201: {
          type: "object",
          required: ["success", "message", "mealItem"],
          properties: {
            success: { type: "boolean" },
            message: { type: "string" },

            mealItem: {
              type: "object",
              required: [
                "id",
                "quantity",
                "createdAt",
                "updatedAt",
                "meal",
                "food",
                "user",
              ],
              properties: {
                id: { type: "string", format: "uuid" },
                quantity: { type: "number" },
                createdAt: { type: "string", format: "date-time" },
                updatedAt: { type: "string", format: "date-time" },

                // 🔹 User (from req.user.id)
                user: {
                  type: "object",
                  properties: {
                    id: { type: "string", format: "uuid" },
                    email: { type: "string" },
                    name: { type: "string" },
                  },
                  required: ["id"],
                },

                // 🔹 Meal relation
                meal: {
                  type: "object",
                  properties: {
                    id: { type: "string", format: "uuid" },
                    name: { type: "string" },
                    logId: { type: "string", format: "uuid" },
                  },
                  required: ["id", "name", "logId"],
                },

                // 🔹 Food relation
                food: {
                  type: "object",
                  properties: {
                    id: { type: "string", format: "uuid" },
                    name: { type: "string" },
                    calories: { type: "number" },
                    protein: { type: "number" },
                    carbs: { type: "number" },
                    fat: { type: "number" },
                    servingSize: { type: "number" },
                  },
                  required: ["id", "name"],
                },
              },
            },
          },
        },
      },
    } satisfies FastifySchema,
  },
};
