import Ingredient from "../../database/models/ingredientsSchema.js";

export const addIngredients = async (req, res) => {
  res.status(201).json(await new Ingredient(req.body).save());
};