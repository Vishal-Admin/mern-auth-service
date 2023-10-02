import { Config } from "../config";
import winston from "winston";

const logState = Config.NODE_ENV == "test";
const logger = winston.createLogger({
    level: "info",
    defaultMeta: {
        serviceName: "auth-service",
    },
    transports: [
        new winston.transports.File({
            dirname: "logs",
            filename: "combined.log",
            level: "info",
            silent: logState,
        }),
        new winston.transports.File({
            dirname: "logs",
            filename: "error.log",
            level: "error",
            silent: logState,
        }),
        new winston.transports.Console({
            level: "info",
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
            ),
        }),
    ],
});

export default logger;
