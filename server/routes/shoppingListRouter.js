import express from "express";
import { addUserIngredient } from "../controllers/ingredients/addUserIngredient.js";
import { removeUserIngredients } from "../controllers/ingredients/removeUserIngredients.js";
import { listUserIngredients } from "../controllers/ingredients/listUserIngredients.js";
import { catchErr } from "../middlewares/catchErr.js";

export const shoppingListRouter = express.Router();

shoppingListRouter.get("/:userId", catchErr(listUserIngredients));
shoppingListRouter.post("/:userId", catchErr(addUserIngredient));
shoppingListRouter.delete("/:userId", catchErr(removeUserIngredients));
