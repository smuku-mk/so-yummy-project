import Recipe from "../database/models/recipesSchema.js";

export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (recipe) {
      res.json(recipe);
    } else {
      res
        .status(404)
        .json({ message: `Recipe with ID ${req.params.id} not found` });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
