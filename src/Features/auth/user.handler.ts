import { FastifyReply, FastifyRequest } from "fastify";
import { http_status } from "../../Features/shared/constants/http";
import { AuthService } from "./user.service";
import { CreateUser } from "./types/user";
import logger from "../../Features/core/logger";

const authService = new AuthService();

export class AuthHandler {
    async registerUser(
        req: FastifyRequest<{ Body: { userData: CreateUser } }>,
        reply: FastifyReply
    ) {
        try {
            const { userData } = req.body;
            if (!userData.email || !userData.phone_no) {
                return reply.status(400).send({ status: false, message: "Email or phone_no is required" });
            }

            const response = await authService.register(userData);

            if (response.status) {
                return reply.status(http_status.Created).send({
                    status: true,
                    message: response.message,
                    data: response.data,
                });
            }

            return reply.status(http_status.BadRequest).send({
                status: false,
                message: response.message,
            });
        } catch (err) {
            console.error("Error during registration:", err);
            return reply.status(http_status.InternalServerError).send({
                status: false,
                message: "An unexpected error occurred",
                error: String(err),
            });
        }
    }
    async loginUser(req: FastifyRequest<{ Body: { emailOrPhone: string; password: string } }>, res: FastifyReply) {
        const emailOrPhone = req.body.emailOrPhone;
        const password = req.body.password;

        if (!emailOrPhone || emailOrPhone.length < 6) {
            return res
                .status(http_status.BadRequest)
                .send({ status: false, message: "Please provide phone or email!" });
        }
        if (!password || password.length < 6) {
            return res
                .status(http_status.BadRequest)
                .send({ status: false, message: "Please provide a valid password!" });
        }
        logger.info(`Logging in user with ${emailOrPhone}`);
        console.log("password", password);
        const data = await authService.login(req.server, emailOrPhone, password);
        if (data.status === false) {
            return res.status(400).send({ status: false, message: data.message });
        }

        return res.status(http_status.Success).send({
            status: true,
            message: "User Login Successfully",
            data: data.data,
            token: data.token
        });

    }
    async logout(req: FastifyRequest, reply: FastifyReply) {
        try {
            // req.user is set by fastify.authenticate middleware
            const user = req.user as { id: string };
            console.log("user", user);
            if (!user) {
                return reply
                    .status(401)
                    .send({ status: false, message: "Unauthorized" });
            }

            // call service to update user_sessions
            await authService.logout(user.id);

            return reply.send({ status: true, message: "Logout success" });
        } catch (err: any) {
            return reply.status(500).send({
                status: false,
                message: err.message,
            });
        }
    }
}
