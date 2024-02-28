import Ingredient from "../../database/models/ingredientsSchema.js";

export const listIngredients = async (req, res) => res.json(await Ingredient.find());