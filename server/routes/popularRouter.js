import express from "express";
import { getPopularRecipes } from "../controllers/recipes/getPopularRecipes.js";
import { catchErr } from "../middlewares/catchErr.js";

export const popularRouter = express.Router();

popularRouter.get("/", catchErr(getPopularRecipes));


