// src/common/filters/exception.filter.ts
import { FastifyReply, FastifyRequest } from "fastify";

// Utility to safely parse JSON if needed
function safeJsonParse(value: any) {
  if (typeof value !== "string") return value;

  try {
    return JSON.parse(value);
  } catch {
    return value; // fallback to original string
  }
}

export function registerGlobalExceptionFilter(fastify: any) {
  fastify.setErrorHandler((error: any, request: FastifyRequest, reply: FastifyReply) => {
    let statusCode = 500;
    let message: any = "Internal server error";

    // Handle HTTP errors from fastify-sensible or custom
    if (error.statusCode) {
      statusCode = error.statusCode;
      message = safeJsonParse(error.message ?? error);
    } else if (error instanceof Error) {
      message = error.message;
    }

    reply.status(statusCode).send({
      success: false,
      path: request.url,
      timestamp: new Date().toISOString(),
      message,
      statusCode,
    });
  });
}
