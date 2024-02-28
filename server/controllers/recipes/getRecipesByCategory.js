import Recipe from '../../database/models/recipesSchema.js';

export const getRecipesByCategory = async (req, res) => {
    const limit = parseInt(req.query.limit) || 8;
    const categories = req.query.categories.split(',');
    const data = {};
    for (let category of categories) {
        data[category] = await Recipe.find({ category }).limit(limit);
    }
    return res.json(data);
};