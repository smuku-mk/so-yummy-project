import Recipe from "../../database/models/recipesSchema.js";

export const addToFav = async (req, res) => {
    const { userId } = req.params;
    const { recipeId } = req.body;

    const recipe = await Recipe.findOneAndUpdate(
        { _id: recipeId },
        { $push: { favorites: userId } },
        { new: true }
    );

    if (!recipe) return res.status(404).json({ message: `Recipe not found` });

    res.status(200).json({ message: `Added to favorites`, recipe });
};