import { Configuration } from "../";

const PRO: Configuration = {
  NODE_ENV: process.env.NODE_ENV || "production",
  PORT: +(process.env.PORT || 3000),
  APP_NAME: process.env.APP_NAME || "production-api",
  APP_DATABASE_URL: process.env.APP_DATABASE_URL || "",
  APP_DATABASE_NAME: process.env.APP_DATABASE_NAME || "",
  APP_LOG_LEVEL: process.env.APP_LOG_LEVEL || "info",
  APP_CORS_ORIGIN: process.env.APP_CORS_ORIGIN || "*",
};

export default PRO;
