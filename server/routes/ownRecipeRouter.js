import express from "express";
import { addRecipe } from "../controllers/ownRecipes/addRecipe.js";
import { deleteRecipeById } from "../controllers/ownRecipes/deleteRecipeById.js";
import { getUserRecipes } from "../controllers/ownRecipes/getUserRecipes.js";

const ownRecipesRouter = express.Router();

ownRecipesRouter.post("/", addRecipe);
ownRecipesRouter.delete("/:recipeId", deleteRecipeById);
ownRecipesRouter.get("/:userId/recipes", getUserRecipes);

export default ownRecipesRouter;
