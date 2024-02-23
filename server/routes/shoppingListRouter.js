const express = require("express");
const router = express.Router();
const {
  listIngredients,
  addIngredients,
  removeIngredients,
} = require("../controllers/ingredients/listIngredients");

router.get("/", async (req, res, next) => {
  try {
    const shoppingList = await listIngredients;
    res.json({ shoppingList });
  } catch (error) {
    next(error);
  }
});

router.post("/add", async (req, res, next) => {
  try {
    const newIngredient = await addIngredients;

    res.status(201).json(newIngredient);
  } catch (error) {
    next(error);
  }
});

router.delete("/remove/:productId", async (req, res, next) => {
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

module.exports = shoppingListRouter;
