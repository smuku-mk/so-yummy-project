import Recipe from "../../database/models/recipesSchema.js";

export const removeFromFav = async (req, res) => {
    const { userId } = req.params;
    const { recipeId } = req.body;
  
    try {
      const recipe = await Recipe.findById(recipeId);
      if (!recipe) {
        return res.status(404).json({ message: `Recipe not found` });
      }
      recipe.favorites = recipe.favorites.filter((favorite) => favorite !== userId);
      await recipe.save();
      return res.status(200).json({ message: `Recipe removed from favorites` });
    } catch (error) {
      return res.status(500).json({ message: `Something went wrong` });
    }
  };