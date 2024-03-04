import { getCategories, getCategoryPage } from "./recipes.service.js";
import Recipe from "../database/models/recipesSchema.js";

export const getCategoryHandler = async (req, res) => {
  res.json(getCategories());
};

export const getCategoryPageHandler = async (req, res) => {
  const { category } = req.params;
  let { page = 1, limit = 8 } = req.query;

  const skip = (page - 1) * limit;

  limit = parseInt(limit) > 8 ? 8 : parseInt(limit);

  try {
    let userId = null;
    if (req.user) {
      userId = req.user._id;
    }

    const [recipes, totalCount] = await getCategoryPage(
      category,
      skip,
      limit,
      userId
    );

    return res.json({
      totalCount,
      currentPage: parseInt(page),
      recipes,
      skip,
      limit,
    });
  } catch (error) {
    console.error("Error while fetching recipes:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const sortRecipes = (arr) => {
  let list = { Breakfast: [], Miscellaneous: [], Chicken: [], Dessert: [] };
  arr.forEach((item) => {
    if (list[item.category] && list[item.category].length < 4) {
      list[item.category].push(item);
    }
  });
  return list;
};

export const getRecipesHandler = async (req, res) => {
  try {
    const recipes = await Recipe.find({}, "-createdAt -updatedAt").exec();
    res.json(sortRecipes(recipes));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
