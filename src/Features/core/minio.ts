import { Client } from "minio"
import config from "../../config/appsetting"

console.log("minio port", config.minio);

export const minioClient = new Client({

    endPoint: config.minio.endPointWithoutPort!,
    port: process.env.MINIO_PORT ? Number(process.env.MINIO_PORT) : 9001,
    useSSL: config.minio.useSSL,
    accessKey: config.minio.accessKey,
    secretKey: config.minio.secretKey
})