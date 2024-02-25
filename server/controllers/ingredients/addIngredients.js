import Ingredient from "../../database/models/ingredientsSchema.js";

export const addIngredients = async (req, res) => {
  const ingredient = new Ingredient(req.body);
  try {
    const newIngredient = await ingredient.save();
    res.status(201).json(newIngredient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
