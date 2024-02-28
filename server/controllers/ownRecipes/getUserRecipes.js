import Recipe from "../../database/models/recipesSchema.js";

export const getUserRecipes = async (req, res) => {

    return res.status(200).json(await Recipe.find({ owner: req.user.id }));
    
};