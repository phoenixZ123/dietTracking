import fp from "fastify-plugin";
import { FastifyRequest, FastifyReply } from "fastify";
import { http_status } from "Features/shared/constants/http";

const publicRoutes = [
  "/api/auth/login",
  "/api/auth/register",
  "/api/food/search",
  "/api/food/get-food",
  "/api/auth/users"
];

export default fp(async (fastify) => {
  fastify.decorate(
    "authenticate",
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        await request.jwtVerify();
      } catch {
        reply.code(http_status.Unauthorized).send({
          success: false,
          message: "Unauthorized",
        });
      }
    }
  );

  // 🔥 GLOBAL AUTH HOOK
  fastify.addHook("onRequest", async (request, reply) => {
    const url = request.raw.url || "";

    // allow public routes
    if (publicRoutes.some((route) => url.startsWith(route))) {
      return;
    }

    // require token for everything else
    await fastify.authenticate(request, reply);
  });
});
