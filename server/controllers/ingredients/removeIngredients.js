import Ingredient from "../../database/models/ingredientsSchema.js";

export const removeIngredients = async (req, res) => {
  const { id } = req.params;
  try {
    const ingredient = await Ingredient.findByIdAndRemove(id);
    if (ingredient) {
      res.json(ingredient);
    } else {
      res.status(404).json({ message: `Ingredient with id ${id} not found` });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
