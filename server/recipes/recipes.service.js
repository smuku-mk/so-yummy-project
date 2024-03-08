import categoriesArr from "../database/models/categoryArr.js";
import Recipe from "../database/models/recipesSchema.js";

export const getCategories = () => {
  return categoriesArr;
};

export const getCategoryPage = async (category, skip, limit, userId) => {
  const regex = new RegExp(category, "i");
  const totalCount = await Recipe.countDocuments({
    category: regex,
  });
  const recipesPages = await Recipe.find({
    category: regex,
    $or: [{ owner: userId }, { owner: { $exists: false } }],
  })
    .sort({ popularity: -1 })
    .skip(skip)
    .limit(limit);
  return [recipesPages, totalCount];
};
