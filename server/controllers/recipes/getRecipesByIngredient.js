import Ingredient from "../../database/models/ingredientsSchema.js";
import Recipe from "../../database/models/recipesSchema.js";

export const getRecipesByIngredient = async (req, res) => {
  const ingredient = await Ingredient.findOne({ ttl: new RegExp(req.query.name, "i") });

  res.json(ingredient 
    ? await Recipe.find({ "ingredients.id": ingredient._id })
    : { status: 404, message: `No recipes with ${req.query.name} found.` });
};