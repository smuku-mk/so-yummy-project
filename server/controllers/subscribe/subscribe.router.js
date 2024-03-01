import express from "express";
import { subscribeHandler } from "./subscribe.controller.js";
import { auth } from "../../middlewares/user/auth.js";

export const subscribeRouter = express.Router();

subscribeRouter.post("/", auth, subscribeHandler);
