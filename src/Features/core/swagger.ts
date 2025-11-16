export const swaggerConfig = (host: string, port: number) => {
    return {
        openapi: {
            openapi: "3.0.0",
            info: {
                title: "Amuse API Documentation",
                description: "Test amuse APIs here",
                version: "0.1.0",
            },
            servers: [
                {
                    url: `http://${host}:${port}/api/v1`,
                    description: "Development server",
                },
            ],
            schemes: ["http"],
            consumes: ["application/json", "multipart/form-data"],
            produces: ["application/json"],
            tags: [
                { name: "Auth", description: "Auth related end-points" },
                { name: "User", description: "User related end-points" },
                { name: "Generes", description: "Generes related end-points" },
                { name: "Novel", description: "Novel related end-points" },
                { name: "Comic", description: "Comic related end-points" },
                { name: "Storytelling", description: "Storytelling related end-points" },
                { name: "Wallet", describe: "Wallet related end-points" },
                { name: "Payment", description: "Payment related end-points" },
            ],
            components: {
                securitySchemes: {
                    apiKey: {
                        type: "apiKey",
                        name: "apiKey",
                        in: "header",
                    },
                },
            },
            externalDocs: {
                url: "https://swagger.io",
                description: "Find more info here",
            },
        },
    };
};

export const swaggerUiConfig = {
    routePrefix: "/docs",
    uiConfig: {
        docExpansion: "list",
        deepLinking: true,
    },
    uiHooks: {
        onRequest: function (request: any, reply: any, next: any) {
            next();
        },
        preHandler: function (request: any, reply: any, next: any) {
            next();
        },
    },
    staticCSP: true,
    transformStaticCSP: (header: any) => header,
    transformSpecification: (swaggerObject: any, request: any, reply: any) => {
        return swaggerObject;
    },
    transformSpecificationClone: true,
};
