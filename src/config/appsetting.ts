import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, `../../.env.${process.env.NODE_ENV || 'development'}`) });

const config = {
    database: {
        mysql: {
            databaseUrl: process.env.POSTGRES_URL,
        }
    },
    smspoh: {
        smspohUrl: process.env.SMSPOH_URL,
        smspohAuthKey: process.env.SMSPOH_AUTH_KEY,
    },
    jwt: {
        secret: process.env.SECRET_KEY,
        expiresIn: process.env.EXPIRE_IN,
        cookieSecret: process.env.COOKIE_SECRET,
        refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
    },
    minio: {
        endPoint: process.env.MINIO_ENDPOINT,
        port: process.env.MINIO_PORT,
        accessKey: process.env.MINIO_ACCESS_KEY,
        secretKey: process.env.MINIO_SECRET_KEY,
        region: process.env.MINIO_REGION,
        useSSL: false,
        bucketName: process.env.MINIO_BUCKET_NAME
    }
    //   cors: {
    //     domain: {
    //       ui: process.env.LOCAL_CORS_UI_DOMAIN,
    //     },
    //   },
};

export default config;
