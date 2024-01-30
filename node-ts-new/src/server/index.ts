import express from "express";
import { createServer } from "http";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "../config";
import { errorHandler } from "../middlewares/error.middleware";
import router from "../routes";

const app = express();

// app.use(requestIp.mw());

// // Rate limiter to avoid misuse of the service and avoid cost spikes
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 5000, // Limit each IP to 500 requests per `window` (here, per 15 minutes)
//   standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
//   legacyHeaders: false, // Disable the `X-RateLimit-*` headers
//   keyGenerator: (req, res) => {
//     return req.clientIp; // IP address from requestIp.mw(), as opposed to req.ip
//   },
//   handler: (_, __, ___, options) => {
//     throw new ApiError(
//       options.statusCode || 500,
//       `There are too many requests. You are only allowed ${
//         options.max
//       } requests per ${options.windowMs / 60000} minutes`
//     );
//   },
// });

// Apply the rate limiting middleware to all requests
// app.use(limiter);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); // configure static file to save images locally
app.use(cookieParser());

// global middlewares
app.use(
  cors({
    origin: config.APP_CORS_ORIGIN,
    credentials: true,
  })
);

app.use("/api/v1", router);

// common error handling middleware
app.use(errorHandler);

export const httpServer = createServer(app);
