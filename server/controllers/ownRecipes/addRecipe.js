import Recipe from "../../database/models/recipesSchema.js";

export const addRecipe = async (req, res) => {
  return res.status(201).json({ 
    message: `Recipe added`, 
    recipe: await new Recipe({
      ...req.body,
      owner: req.user.id,
    }).save()
  });
};