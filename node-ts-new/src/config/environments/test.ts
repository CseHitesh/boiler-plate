import { Configuration } from "../";

const TEST: Configuration = {
  NODE_ENV: "test",
  PORT: 3000,
  APP_NAME: "testing-api",
  APP_DATABASE_URL: process.env.APP_DATABASE_URL || "",
  APP_DATABASE_NAME: process.env.APP_DATABASE_NAME || "",
  APP_LOG_LEVEL: "debug",
  APP_CORS_ORIGIN: process.env.APP_CORS_ORIGIN || "*",
};

export default TEST;
