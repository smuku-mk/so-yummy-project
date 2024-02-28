import express from "express";
import { listIngredients } from "../controllers/ingredients/listIngredients.js";
import { searchIngredient } from "../controllers/ingredients/searchIngredient.js";
import { getRecipesByIngredient } from "../controllers/recipes/getRecipesByIngredient.js";
import { catchErr } from "../middlewares/catchErr.js";

export const ingredientsRouter = express.Router();

ingredientsRouter.get("/list", catchErr(listIngredients));
ingredientsRouter.get("/test", catchErr(searchIngredient));
ingredientsRouter.get("/", catchErr(getRecipesByIngredient));


