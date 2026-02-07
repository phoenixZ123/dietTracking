import { FromSchema } from "json-schema-to-ts";

/**
 * Reusable food properties
 */
const foodProperties = {
  name: { type: "string", minLength: 1 },
  calories: { type: "number", minimum: 0 },
  protein: { type: "number", minimum: 0 },
  carbs: { type: "number", minimum: 0 },
  fat: { type: "number", minimum: 0 },
  servingSize: { type: "number", minimum: 0 },
  unit: { type: "string", enum: ["g", "ml"] }, // 👈 ADD THIS
} as const;


/**
 * FOOD SCHEMA (ONE SCOPE, MANY CRUD)
 */
export const foodSchema = {
   create: {
    schema: {
      tags: ["Food"],
      body: {
        anyOf: [
          {
            type: "object",
            required: ["name", "calories", "protein", "carbs", "fat", "servingSize", "unit"],
            properties: foodProperties,
          },
          {
            type: "array",
            items: {
              type: "object",
              required: ["name", "calories", "protein", "carbs", "fat", "servingSize", "unit"],
              properties: foodProperties,
            }
          }
        ]
      },
      response: {
        201: {
          type: "object",
          properties: {
            success: { type: "boolean" },
            data: {
              anyOf: [
                {
                  type: "object",
                  properties: {
                    id: { type: "number" },
                    uuid: { type: "string" },
                    ...foodProperties,
                    created_at: { type: "string" },
                    updated_at: { type: "string" },
                  }
                },
                {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "number" },
                      uuid: { type: "string" },
                      ...foodProperties,
                      created_at: { type: "string" },
                      updated_at: { type: "string" },
                    }
                  }
                }
              ]
            }
          }
        }
      }
    }
  },

  update: {
    schema: {
      tags: ["Food"],
      params: {
        type: "object",
        required: ["id"],
        properties: {
          id: { type: "number" },
        },
      },
      body: {
        type: "object",
        additionalProperties: false,
        properties: foodProperties,
      },
    },
  },

  getOne: {
    schema: {
      tags: ["Food"],
      params: {
        type: "object",
        required: ["id"],
        properties: {
          id: { type: "number" },
        },
      },
    },
  },

  getAll: {
    schema: {
      tags: ["Food"],
      querystring: {
        type: "object",
        properties: {
          search: { type: "string" },
          limit: { type: "number", minimum: 1 },
          page: { type: "number", minimum: 1 },
        },
      },
    },
  },

  delete: {
    schema: {
      tags: ["Food"],
      params: {
        type: "object",
        required: ["id"],
        properties: {
          id: { type: "number" },
        },
      },
    },
  },
} as const;
export type CreateFoodBody = FromSchema<
  typeof foodSchema.create.schema.body
>;

export type UpdateFoodBody = FromSchema<
  typeof foodSchema.update.schema.body
>;

export type FoodParams = FromSchema<
  typeof foodSchema.getOne.schema.params
>;

export type FoodQuery = FromSchema<
  typeof foodSchema.getAll.schema.querystring
>;
