import { FastifyReply, FastifyRequest } from "fastify";
import { ExerciseService } from "./exercise.service";
import { createExercise, UserWorkOutLog } from "./types/exercise";
import { http_status } from "../../Features/shared/constants/http";

const exerciseService = new ExerciseService();
export class ExerciseHandler {
    async createExerciseByAdmin(req: FastifyRequest<{ Body: createExercise }>, res: FastifyReply) {
        try {
            const data = req.body;
            const user = req.user as { id: string };
            if (!data) {
                return res.status(http_status.BadRequest).send({
                    success: false,
                    message: "Exercise data is required"
                });
            }
            const exercise = await exerciseService.createExercise(data, user.id);
            return res.status(http_status.Created).send({
                success: true,
                message: "Exercise create sucessfully",
                exercise
            })
        } catch (err: any) {
            const status = err.statusCode || 500;
            return res.status(status).send({ error: err.message });
        }
    }
    async createUserExercise(req: FastifyRequest<{ Body: UserWorkOutLog }>, res: FastifyReply): Promise<any> {
        const data = req.body;
        const user = req.user as { id: string };
        if (!data) {
            return res.status(http_status.BadRequest).send({
                success: false,
                message: "Data is required"
            })
        }
        const workOutLog = await exerciseService.createUserWorkOutLog(data, user.id);
        if (workOutLog == null) {
            return res.status(http_status.BadRequest).send({
                success: false,
                message: "dailyLogId is required"
            })
        }
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
    async getDailyBurnedHandler(req: FastifyRequest, res: FastifyReply): Promise<any> {
        const user = req.user as { id: string };
        if (!user) {
            res.status(http_status.Unauthorized).send({
                success: false,
                message: "User Unauthorized"
            })
        }
        const calories = await exerciseService.getDailyBurnedService(user.id);
        if (calories.length <= 0) {
            res.status(http_status.NotFound).send({
                success: false,
                message: "Not Burned Yet"
            })
        }
        return res.status(http_status.Success).send({
            success: true,
            message: "User Burned Calories Successfully",
            calories
        })
    }
}