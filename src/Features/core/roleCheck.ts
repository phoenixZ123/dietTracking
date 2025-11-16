import { JwtPayload } from "jsonwebtoken";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import fp from "fastify-plugin";

export default fp(async (fastify: FastifyInstance) => {
    if (!fastify.hasDecorator("roleCheck")) {
        fastify.decorate(
            "roleCheck",
            (roles: number[]) =>
                async (request: FastifyRequest, reply: FastifyReply) => {
                    // Extend JwtPayload to include role_id
                    const user = request.user as JwtPayload & { roleId?: number };

                    if (!user || !user.roleId || !roles.includes(user.roleId)) {
                        return reply.status(403).send({ error: "Forbidden" });
                    }
                }
        );
    }
});
