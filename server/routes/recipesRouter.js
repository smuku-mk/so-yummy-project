import express from "express";
import { getRecipeById } from "../controllers/recipes/getRecipeById.js";
import {
  getCategoryHandler,
  getCategoryPageHandler,
  getRecipesHandler,
} from "../recipes/recipes.controller.js";
import asyncWrapper from "../helpers/asyncWrapper.js";
// import { authMiddleware } from "../auth/auth.middlewares.js";d

const recipesRouter = express.Router();

recipesRouter.get(
  "/main-page",
  // authMiddleware,
  asyncWrapper(getRecipesHandler)
);
recipesRouter.get(
  "/category-list",
  // authMiddleware,
  asyncWrapper(getCategoryHandler)
);
recipesRouter.get(
  "/:category",
  // authMiddleware,
  asyncWrapper(getCategoryPageHandler)
);
recipesRouter.get("/:id", getRecipeById);

export default recipesRouter;