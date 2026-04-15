import { WorkOutResponse } from "Features/Exercise/types/exercise";
import { workoutData } from "./types/workout";
import { IWorkoutLogRepository } from "./workoutlog.interface";
import { JwtPayload } from "Features/utils/auth-user";
import { FastifyReply, FastifyRequest } from "fastify";
import { http_status } from "Features/shared/constants/http";

export class WorkoutLogHandler {
    constructor(private workoutLogRepository: IWorkoutLogRepository) {}

    async createWorkoutLog(req:FastifyRequest<{Body: workoutData}>,reply:FastifyReply):Promise<WorkOutResponse | any> {
        const workoutData=req.body;
        if(!workoutData){
            return reply.status(http_status.Unauthorized).send({
                success: false,
                message: "Invalid workout data",
                data: null
            });
        }
        const user=await req.user as JwtPayload;
        const userId=user.id.toString();
        const workoutLog= await this.workoutLogRepository.createWorkoutLog(workoutData, userId);
        if(!workoutLog){
            return reply.status(http_status.BadRequest).send({
                success: false,
                message: "Failed to create workout log",
                data: null
            });
        }
        return reply.status(http_status.Created).send({
            success: true,
            message: "Workout log created successfully",
            data: workoutLog
        });
    }
    async getWorkoutLogsByDate(req:FastifyRequest<{Params:{date:string}}>,reply:FastifyReply):Promise<WorkOutResponse | any> {
        const {date}=req.params;
        const user=await req.user as JwtPayload;
        const userId=user.id.toString();
        const workoutLogs=await this.workoutLogRepository.getWorkoutLogsByDate(date, userId);
        return reply.status(http_status.Success).send({
            success: true,
            message: "Workout logs retrieved successfully",
            data: workoutLogs
        });
    }
}