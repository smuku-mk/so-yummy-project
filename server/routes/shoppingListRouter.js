import express from "express";
import { listIngredients } from '../controllers/ingredients/listIngredients.js'
import { addIngredients } from "../controllers/ingredients/addIngredients.js";  
import { removeIngredients } from "../controllers/ingredients/removeIngredients.js"; 

const ShoppingListRouter = express.Router();

ShoppingListRouter.get("/", listIngredients);
ShoppingListRouter.post("/add", addIngredients);
ShoppingListRouter.delete("/remove/:productId", removeIngredients);

export default ShoppingListRouter;