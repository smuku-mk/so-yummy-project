import Recipe from "../../database/models/recipesSchema.js";

export const getUserFavs = async (req, res) => {
  const { userId } = req.params;
  const recipes = await Recipe.find({ favorites: userId });
  
  res.status(200).json(recipes.length ? recipes : { message: `You don't have any favorites yet :(` });
};