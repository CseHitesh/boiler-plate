import { Router } from "express";
import { findAll } from "../controllers/user.controller";

export const userRouter = Router();

userRouter.get("/", findAll);
