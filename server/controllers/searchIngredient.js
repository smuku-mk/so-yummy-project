import Ingredient from "../database/models/ingredientsSchema.js";

export const searchIngredient = async (req, res) => {
  const name = req.query.name;
  try {
    const ingredient = await Ingredient.findOne({ ttl: new RegExp(name, "i") });
    if (ingredient) {
      res.json(ingredient);
    } else {
      res
        .status(404)
        .json({ message: `Ingredient with name ${name} not found` });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
