import { Configuration } from "../";

const DEV: Configuration = {
  NODE_ENV: "development",
  PORT: +(process.env.PORT || 3000),
  APP_NAME: process.env.APP_NAME || "development-api",
  APP_DATABASE_URL: process.env.APP_DATABASE_URL || "",
  APP_DATABASE_NAME: process.env.APP_DATABASE_NAME || "",
  APP_LOG_LEVEL: process.env.APP_LOG_LEVEL || "debug",
  APP_CORS_ORIGIN: process.env.APP_CORS_ORIGIN || "*",
};

export default DEV;
