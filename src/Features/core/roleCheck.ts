import { JwtPayload } from "jsonwebtoken";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import fp from "fastify-plugin";

export default fp(async (fastify: FastifyInstance) => {
    if (!fastify.hasDecorator("roleCheck")) {
        fastify.decorate(
            "roleCheck",
            (roles: string[]) =>
                async (request: FastifyRequest, reply: FastifyReply) => {
                    const user = request.user as JwtPayload & { roleId?: string };

                    // If no user or role missing → forbidden
                    if (!user?.roleId) {
                        return reply.status(403).send({ error: "Forbidden" });
                    }

                    // Check if allowed
                    if (!roles.includes(user.roleId)) {
                        return reply.status(403).send({ error: "Forbidden" });
                    }
                }
        );
    }
});
