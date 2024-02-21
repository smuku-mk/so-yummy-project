import mongoose from "mongoose";
import * as Recipe from "../database/models/recipesSchema";

export async function addRecipe(req, res) {
  const userId = req.user.id;
  const {
    title,
    description,
    category,
    time,
    ingredients,
    thumb,
    preview,
    instructions,
  } = req.body;
  try {
    const newRecipe = new Recipe({
      title,
      description,
      category,
      time,
      ingredients,
      thumb,
      preview,
      instructions,
      owner: userId,
    });
    await newRecipe.save();
    return res.status(201).json({ message: `Recipe added`, recipe: newRecipe });
  } catch (error) {
    return res.status(400).json({ message: `Failed to add recipe` });
  }
}

export async function deleteRecipeById(req, res) {
  const { id } = req.params;
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: `Recipe deleted`, recipe: deletedRecipe });
  } catch (error) {
    return res.status(400).json({ message: `Failed to delete recipe` });
  }
}

export async function getUserRecipes(req, res) {
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
}
