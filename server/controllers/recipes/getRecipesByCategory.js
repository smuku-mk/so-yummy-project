import Recipe from '../../database/models/recipesSchema.js';

export const getRecipesByCategory = async (req, res) => {
    const limit = req.query.limit !== 'all' ? parseInt(req.query.limit) || 8 : undefined;
    const categories = req.query.categories.split(',');
    const data = await Promise.all(categories.map(async (category) => {
        const query = Recipe.find({ category });
        if (limit) query.limit(limit);
        return { [category]: await query.exec() };
    }));
    return res.json(Object.assign({}, ...data));
}