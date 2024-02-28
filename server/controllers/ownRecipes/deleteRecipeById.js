import Recipe from '../../database/models/recipesSchema.js';

  export const deleteRecipeById = async (req, res) => {

  const { id } = req.params;
  
  return res.status(200).json({ 
    message: 'Recipe deleted', 
    recipe: await Recipe.findByIdAndDelete(id) 
  });
};