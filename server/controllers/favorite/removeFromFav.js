import Recipe from "../../database/models/recipesSchema.js";

export const removeFromFav = async (req, res) => {
  const { userId } = req.params;
  const { recipeId } = req.body;

  await Recipe.findOneAndUpdate(
    { _id: recipeId },
    { $pull: { favorites: userId } },
    { new: true }
  );

  return res.status(200).json({ message: `Recipe removed from favorites` });
};