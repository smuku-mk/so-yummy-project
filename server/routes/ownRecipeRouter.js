import express from "express";
import { addRecipe } from "../controllers/ownRecipes/addRecipe.js";
import { deleteRecipeById } from "../controllers/ownRecipes/deleteRecipeById.js";
import { getUserRecipes } from "../controllers/ownRecipes/getUserRecipes.js";
import { catchErr } from "../middlewares/catchErr.js";
import { auth } from "../middlewares/user/auth.js";

export const ownRecipesRouter = express.Router();

ownRecipesRouter.post("/", auth, catchErr(addRecipe));
ownRecipesRouter.delete("/:recipeId", catchErr(deleteRecipeById)); //ten chyba do poprawy
ownRecipesRouter.get(":/userId/recipes", auth, catchErr(getUserRecipes));

