import Recipe from "../../database/models/recipesSchema.js";

export const getRecipeById = async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);
    res.status(recipe ? 200 : 404).json(recipe || { message: `Recipe with ID ${req.params.id} not found` });
};