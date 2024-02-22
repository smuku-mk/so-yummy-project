import mongoose from "mongoose";
import { Recipe } from "../database/models/recipesSchema";

export async function addToFav(req, res) {
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
}

export async function removeFromFav(req, res) {
  const { userId } = req.params;
  const { recipeId } = req.body;

  try {
    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: `Recipe not found` });
    }
    recipe.favorites = recipe.favorites.filter(
      (favorite) => favorite !== userId
    );
    await recipe.save();
    return res.status(200).json({ message: `Recipe removed from favorites` });
  } catch (error) {
    return res.status(500).json({ message: `Something went wrong` });
  }
}

export async function getUserFavs(req, res) {
  const { userId } = req.params;

  try {
    const recipes = await Recipe.find({ favorites: userId });
    if (!recipes || recipes.length === 0) {
      return res
        .status(404)
        .json({ message: `You don't have any favorites yet :(` });
    }
    return res.status(200).json(recipes);
  } catch (error) {
    return res.status(500).json({ message: `Something went wrong` });
  }
}
