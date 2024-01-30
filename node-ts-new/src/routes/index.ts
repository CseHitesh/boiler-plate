import { Router } from "express";
import { userRouter } from "./user.route";
import { healthCheck } from "../controllers/healthcheck.controller";

const router = Router();

// healthcheck routes

router.use("/healthcheck", healthCheck);

// app routes
router.use("/users", userRouter);

export default router;
