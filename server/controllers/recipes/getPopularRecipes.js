import Recipe from "../../database/models/recipesSchema.js";

export const getPopularRecipes = async (req, res) => {
  const result = await Recipe.aggregate([
    {
      $project: {
        favorites: 1,
        title: 1,
        thumb: 1,
        description: 1,
        popularity: 1,
        preview: 1,
        count: { $size: "$favorites" },
      },
    },
    { $match: { owner: { $exists: false } } },
    { $sort: { count: -1 } },
    { $skip: 0 },
    { $limit: 4 },
  ]);

  result.length === 0 ? res.status(404).send('Not found') : res.json(result);
};