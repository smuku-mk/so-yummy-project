import Recipe from "../../database/models/recipesSchema.js";
import RequestError from "../../helpers/error.js";

const getPopularRecipesHandler = async (req, res) => {
  try {
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

    if (result.length === 0) {
      throw new RequestError(404, "Not found");
    }

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

export default getPopularRecipesHandler;
