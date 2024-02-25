import Recipe from "../../database/models/recipesSchema.js";

export const getUserFavs = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const recipes = await Recipe.find({ favorites: userId });
      if (!recipes || recipes.length === 0) {
        return res.status(404).json({ message: `You don't have any favorites yet :(` });
      }
      return res.status(200).json(recipes);
    } catch (error) {
      return res.status(500).json({ message: `Something went wrong` });
    }
  };