import express from "express";
import { getRecipeByTitle } from "../controllers/recipes/getRecipeByTitle.js";
import { catchErr}  from "../middlewares/catchErr.js";

export const searchRouter = express.Router();

searchRouter.get("/", catchErr(getRecipeByTitle));

