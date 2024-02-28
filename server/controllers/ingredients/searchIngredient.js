import Ingredient from "../../database/models/ingredientsSchema.js";

export const searchIngredient = async (req, res) => {
  const name = req.query.name;
  const ingredient = await Ingredient.findOne({ ttl: new RegExp(req.query.name, "i") });
  if (!ingredient) return res.status(404).json({ message: `Ingredient with name ${name} not found` });
  return res.json(ingredient);
};