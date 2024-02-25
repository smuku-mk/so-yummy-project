import Recipe from '../../database/models/recipesSchema.js';
export const deleteRecipeById = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedRecipe = await Recipe.findByIdAndDelete(id);
      return res.status(200).json({ message: `Recipe deleted`, recipe: deletedRecipe });
    } catch (error) {
      return res.status(400).json({ message: `Failed to delete recipe` });
    }
  };