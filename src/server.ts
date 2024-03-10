import app from "./app";
import { Config } from "./config";
import logger from "./config/logger";

const startServer = () => {
    try {
        app.listen(Config.PORT, () => {
            logger.info(`Starting server on port ${Config.PORT}`);
        });
    } catch (error) {
        if (error instanceof Error) {
            logger.error(error.message);
            process.exit(1);
        }
    }
};
startServer();
