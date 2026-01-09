import { FastifyReply, FastifyRequest } from "fastify";
import { ExerciseService } from "./exercise.service";
import { createExercise, UserWorkOutLog, WorkOutResponse } from "./types/exercise";
import { http_status } from "Features/shared/constants/http";
import { WorkoutLog } from "@prisma/client";

const exerciseService = new ExerciseService();
export class ExerciseHandler {
    async createExerciseByAdmin(req: FastifyRequest<{ Body: createExercise }>, res: FastifyReply) {
        const data = req.body;
        const exercise = await exerciseService.createExercise(data);
        return res.status(http_status.Created).send({
            success: true,
            message: "Exercise create sucessfully",
            exercise
        })
    }
    async createUserLog(req: FastifyRequest<{ Body: UserWorkOutLog }>, res: FastifyReply): Promise<any> {
        const data = req.body;
        if (!data) {
            return res.status(http_status.BadRequest).send({
                success: false,
                message: "Data is required"
            })
        }
        const user = req.user as { id: string };
        const workOutLog = await exerciseService.createUserWorkOutLog(data, user.id);
        return res.status(http_status.Created).send({
            success: true,
            message: "WorkOutLog created successfully",
            workOutLog
        });
    }
    async getDailyExercise(req: FastifyRequest, res: FastifyReply): Promise<any> {
        const user = req.user as { id: string };
        const workOutLog = await exerciseService.getDailyExercise(user.id);
        if (workOutLog.length <= 0) {
            return {
                message: "WorkOutLog Empty"
            }
        }
        return res.status(http_status.Success).send({
            success: true,
            message: "Get WorkOutLog successfully",
            workOutLog
        })
    }
}