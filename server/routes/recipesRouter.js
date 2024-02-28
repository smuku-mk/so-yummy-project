import express from "express";
import { getRecipeById, getRecipesByCategory, getCategoryList } from "../controllers/recipes/index.js";
import { catchErr}  from "../middlewares/catchErr.js";

export const recipesRouter = express.Router();

recipesRouter.get("/main-page", catchErr(getRecipesByCategory)); // pobiera z limitem, default 8
recipesRouter.get("/category-list", catchErr(getCategoryList));
recipesRouter.get("/:category", catchErr(getRecipesByCategory)); // pobiera z limitem, default 8
recipesRouter.get("/:id", catchErr(getRecipeById));