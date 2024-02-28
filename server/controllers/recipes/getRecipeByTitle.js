import Recipe from "../../database/models/recipesSchema.js";

export const getRecipeByTitle = async ({ query: { title } }, res) => res.json(await Recipe.find({ title: new RegExp(title, "i") }));
