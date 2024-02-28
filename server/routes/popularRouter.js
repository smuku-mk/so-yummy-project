import express from "express";
import { getPopularRecipes } from "../controllers/recipes/getPopularRecipe.js";
import { catchErr } from "../middlewares/catchErr.js";

export const popularRouter = express.Router();

popularRouter.get("/", catchErr(getPopularRecipes));


