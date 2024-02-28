import express from "express";
import { getRecipesByTitle } from "../controllers/recipes/getRecipesByTitle.js";
import { catchErr}  from "../middlewares/catchErr.js";

export const searchRouter = express.Router();

searchRouter.get("/", catchErr(getRecipesByTitle));

