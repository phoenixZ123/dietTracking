export const authSchema = {
    register: {
        schema: {
            tags: ["Auth"],
            body: {
                type: "object",
                required: ["userData"],
                properties: {
                    // otp: { type: "string" },
                    userData: {
                        type: "object",
                        properties: {
                            name: { type: "string", description: "User's name" },
                            dob: { type: "string", description: "User's date of birth" },
                            email: { type: "string", description: "User's email" },
                            phone_no: { type: "string", description: "User's phone number" },
                            password: { type: "string", description: "User's password" },
                            roleId: { type: "integer", description: "User's role id" }
                        }
                    }
                }
            },
            response: {
                200: {
                    type: "object",
                    properties: {
                        status: { type: "boolean" },
                        message: { type: "string" },
                        user: {
                            type: "object",
                            properties: {
                                id: { type: "integer" },
                                uuid: { type: "string" },
                                name: { type: "string" },
                                email: { type: "string" },
                                phone_no: { type: "string" },
                                session: { type: "string" },
                                roleId: { type: "integer" },
                                role: {
                                    type: "object",
                                    properties: {
                                        id: { type: "integer" },
                                        name: { type: "string" },
                                    }
                                }
                            }
                        },
                        token: {
                            type: "object",
                            properties: {
                                access: { type: "string" },
                                refresh: { type: "string" }
                            }
                        }
                    }
                },
                400: {
                    type: "object",
                    properties: {
                        status: { type: "boolean" },
                        message: { type: "string" },
                    }
                }
            }
        }
    },
    login: {
        schema: {
            tags: ["Auth"],
            body: {
                type: "object",
                required: ["emailOrPhone", "password"],
                properties: {
                    emailOrPhone: { type: "string" },
                    password: { type: "string" }
                }
            },
            response: {
                200: {
                    type: "object",
                    properties: {
                        status: { type: "boolean" },
                        message: { type: "string" },
                        data: {
                            type: "object",
                            properties: {
                                id: { type: "string" },
                                uuid: { type: "string" },
                                name: { type: "string" },
                                email: { type: "string" },
                                phone_no: { type: "string" },
                                is_online:{type:"boolean"},
                                password: { type: "string" },
                                session: { type: "string" },
                                roleId: { type: "integer" },
                                role: {
                                    type: "object",
                                    properties: {
                                        id: { type: "integer" },
                                        name: { type: "string" },
                                    }
                                }
                            }
                        },
                        token: {
                            type: "object",
                            properties: {
                                access: { type: "string" },
                                refresh: { type: "string" }
                            }
                        }
                    }
                },
                400: {
                    type: "object",
                    properties: {
                        status: { type: "boolean" },
                        message: { type: "string" },
                    }
                }
            }
        }
    },
    checkUserExists: {
        schema: {
            tags: ["Auth"],
            querystring: {
                type: "object",
                required: ["phoneOrEmail"],
                properties: {
                    phoneOrEmail: { type: "string", description: "User's id." },
                }
            },
        }
    },
}