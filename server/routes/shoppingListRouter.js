import express from "express";
import { listIngredients } from '../controllers/ingredients/listIngredients.js'
import { addIngredients } from "../controllers/ingredients/addIngredients.js";  
import { removeIngredients } from "../controllers/ingredients/removeIngredients.js"; 
import { catchErr } from "../middlewares/catchErr.js";

export const shoppingListRouter = express.Router();

shoppingListRouter.get("/", catchErr(listIngredients));
shoppingListRouter.post("/add", catchErr(addIngredients));
shoppingListRouter.delete("/remove/:productId", catchErr(removeIngredients));