const express = require("express");
const shoppingListRouter = express.Router();
const listIngredients = require("../controllers/listIngredients");

router.get("/", async (req, res) => {
  try {
    const shoppingList = await listIngredients;
    res.json({ shoppingList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/add", async (req, res) => {
  try {
    const { productId } = req.body;

    res
      .status(201)
      .json({ message: "Product added to shopping list successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.delete("/remove/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;

    res.json({ message: "Product removed from shopping list successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = shoppingListRouter;
