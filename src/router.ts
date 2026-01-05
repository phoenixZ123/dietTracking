import { FastifyInstance } from "fastify";

import AuthRoutes from "./Features/auth/user.route";
import FoodRoutes from "Features/Food/food.route";
import dailyLogRoute from "Features/Daily-log/daily-log.route";
import MealRoute from "Features/Meal/meal.route";
// import UserRoutes from "./Features/user/user.route";
// import FoodRoutes from "./Features/food/food.route";
// import DailyLogRoutes from "./Features/dailyLog/dailyLog.route";
// import MealRoutes from "./Features/meal/meal.route";
// import ExerciseRoutes from "./Features/exercise/exercise.route";
// import WorkoutLogRoutes from "./Features/workoutLog/workoutLog.route";
// import WaterLogRoutes from "./Features/waterLog/waterLog.route";
// import WeightLogRoutes from "./Features/weightLog/weightLog.route";

/**
 * Registers all routes for the Diet Tracking app.
 *
 * @param fastify The Fastify instance
 */
async function registerRoutes(fastify: FastifyInstance) {
  // Auth & Users
  fastify.register(AuthRoutes, { prefix: "/auth" });
  //   fastify.register(UserRoutes, { prefix: "/users" });

  //   // Food & Meals
  fastify.register(FoodRoutes, { prefix: "/food" });
  fastify.register(MealRoute, { prefix: "/meals" });

  //   // Daily Logs
  fastify.register(dailyLogRoute, { prefix: "/daily-logs" });

  //   // Fitness Tracking
  //   fastify.register(ExerciseRoutes, { prefix: "/exercises" });
  //   fastify.register(WorkoutLogRoutes, { prefix: "/workouts" });

  //   // Hydration & Weight Tracking
  //   fastify.register(WaterLogRoutes, { prefix: "/water-logs" });
  //   fastify.register(WeightLogRoutes, { prefix: "/weight-logs" });
}

export default registerRoutes;
