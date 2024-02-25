import Recipe from "../../database/models/recipesSchema.js";

export const getRecipeByTitle = async (req, res) => {
  const { title } = req.query;

  try {
    const recipes = await Recipe.find({ title: new RegExp(title, "i") });
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
