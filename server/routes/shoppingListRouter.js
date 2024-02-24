import express from "express";
import { listIngredients } from "../controllers/ingredients/listIngredients.js";
import { addIngredients } from "../controllers/ingredients/addIngredients.js";  
import { removeIngredients } from "../controllers/ingredients/removeIngredients.js"; 


const ShoppingListRouter = express.Router();


ShoppingListRouter.get("/", async (req, res, next) => {
  try {
    const shoppingList = await listIngredients;
    res.json({ shoppingList });
  } catch (error) {
    next(error);
  }
});

ShoppingListRouter.post("/add", async (req, res, next) => {
  try {
    const newIngredient = await addIngredients;

    res.status(201).json(newIngredient);
  } catch (error) {
    next(error);
  }
});

ShoppingListRouter.delete("/remove/:productId", async (req, res, next) => {
  try {
    const removedIngredient = await removeIngredients;
    if (removedIngredient) {
      res.json(removedIngredient);
    } else {
      res.status(404).json({ message: `Ingredient with id ${id} not found` });
    }
  } catch (error) {
    next(error);
  }
});

export default ShoppingListRouter;