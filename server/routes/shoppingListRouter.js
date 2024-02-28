import express from "express";
import { addUserIngredient } from "../controllers/ingredients/addUserIngredient.js";
import { removeIngredients } from "../controllers/ingredients/removeIngredients.js"; 
import { catchErr } from "../middlewares/catchErr.js";

export const shoppingListRouter = express.Router();

//shoppingListRouter.get("/:userId", catchErr());
shoppingListRouter.post("/:userId", catchErr(addUserIngredient));
//shoppingListRouter.delete("/:userId", catchErr(removeIngredients));