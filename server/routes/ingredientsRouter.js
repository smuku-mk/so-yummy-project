import express from "express";
import { listIngredients } from "../controllers/ingredients/listIngredients.js";
import { searchIngredient } from "../controllers/ingredients/searchIngredient.js";
import { getRecipesByIngredient } from "../controllers/getRecipesByIngredient.js";

const ingredientsRouter = express.Router();

ingredientsRouter.get("/list", listIngredients);
ingredientsRouter.get("/test", searchIngredient);
ingredientsRouter.get("/", getRecipesByIngredient);

export default ingredientsRouter;

