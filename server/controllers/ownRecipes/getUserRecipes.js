import Recipe from "../../database/models/recipesSchema.js";

export const getUserRecipes = async (req, res) => {
    const userId = req.user.id;
    try {
      const recipes = await Recipe.find({ owner: userId });
      if (!recipes) {
        return res.status(400).json({ message: `No recipes found` });
      }
      return res.status(200).json(recipes);
    } catch {
      return res.status(500).json({ message: `Failed to load!` });
    }
  };
  