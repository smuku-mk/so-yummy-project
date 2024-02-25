import Recipe from "../../database/models/recipesSchema.js";

export const addToFav = async (req, res) => {
    const { userId } = req.params;
    const { recipeId } = req.body;
  
    try {
      const recipe = await Recipe.findById(recipeId);
      if (!recipe) {
        return res.status(404).json({ message: `Recipe not found` });
      }
      recipe.favorites.push(userId);
      await recipe.save();
      return res.status(200).json({ message: `Added to favorites`, recipe });
    } catch (error) {
      return res.status(500).json({ message: `Something went wrong` });
    }
  };