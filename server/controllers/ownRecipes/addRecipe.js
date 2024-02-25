import Recipe from "../../database/models/recipesSchema.js";

export const addRecipe = async (req, res) => {
    const userId = req.user.id;
    const { title, description, category, time, ingredients, thumb, preview, instructions } = req.body;
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
  };