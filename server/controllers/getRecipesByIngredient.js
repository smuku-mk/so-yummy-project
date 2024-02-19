import Ingredient from "../database/models/ingredientsSchema.js";
import Recipe from "../database/models/recipesSchema.js";

export const getRecipesByIngredient = async (req, res) => {
  const name = req.query.name;
  console.log(name);
  try {
    const ingredient = await Ingredient.findOne({ ttl: new RegExp(name, "i") });
    if (ingredient) {
      const recipes = await Recipe.find({ "ingredients.id": ingredient._id });
      console.log(recipes);
      res.json(recipes);
    } else {
      res
        .status(404)
        .json({ message: `Ingredient with name ${name} not found` });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
