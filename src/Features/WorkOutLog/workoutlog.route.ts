import { FastifyInstance } from "fastify";
import { WorkoutLogHandler } from "./workoutlog.handler";
import { WorkoutRepository } from "./workoutlog.repository";

const workRepo=new WorkoutRepository();
const workoutHandler=new WorkoutLogHandler(workRepo);
export default function WorkoutLogRoute(fastify:FastifyInstance){
    fastify.post("/",workoutHandler.createWorkoutLog)
    fastify.get("/:date",workoutHandler.getWorkoutLogsByDate)
}