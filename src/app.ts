import express, { Request, Response, NextFunction } from "express";
import logger from "./config/logger";
import { HttpError } from "http-errors";
const app = express();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(error.message);
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({
        error: [
            {
                type: error.name,
                msg: error.message,
                path: "",
                location: "",
            },
        ],
    });
});

export default app;
