import express from "express";
import { getRecipeById } from "../controllers/recipes/getRecipeById.js";
import { getRecipesByCategory } from "../controllers/recipes/getRecipesByCategory.js"; 
import { getCategoryList } from "../controllers/recipes/getCategoryList.js";
import { catchErr}  from "../middlewares/catchErr.js";


export const recipesRouter = express.Router();

recipesRouter.get("/main-page", catchErr(getRecipesByCategory)); //test, pobiera z limitem, default 8
recipesRouter.get("/category-list", catchErr(getCategoryList));
recipesRouter.get("/:category", catchErr(getRecipesByCategory)); //test, pobiera z limitem, default 8
recipesRouter.get("/:id", catchErr(getRecipeById));