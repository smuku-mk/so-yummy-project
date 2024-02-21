import express from "express";
import {
  addRecipe,
  deleteRecipeById,
  getUserRecipes,
} from "../controllers/ownRecipes";

const ownRecipesRouter = express.Router();

ownRecipesRouter.post("/", addRecipe);

ownRecipesRouter.delete("/:recipeId", deleteRecipeById);

ownRecipesRouter.get(":/userId/recipes", getUserRecipes);

export default ownRecipesRouter;
