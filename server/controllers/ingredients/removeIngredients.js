import Ingredient from "../../database/models/ingredientsSchema.js";

export const removeIngredients = async (req, res) => {
  const { id } = req.params;
  await Ingredient.findByIdAndRemove(id)
    ? res.json(await Ingredient.findByIdAndRemove(id))
    : res.status(404).json({ message: `Ingredient with id ${id} not found` });
};