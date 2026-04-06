import { FastifyInstance } from "fastify";
import { ExerciseHandler } from "./exercise.handler";

const exerciseHandler = new ExerciseHandler();
export default function ExerciseRoute(fastify: FastifyInstance) {
    fastify.post("/create", exerciseHandler.createExerciseByAdmin);
    fastify.post("/user-do",exerciseHandler.createUserExercise);
    // fastify.get("/daily-exercise",exerciseHandler.getDailyExercise);
    fastify.get("/burned-calories",exerciseHandler.getDailyBurnedHandler);
}
