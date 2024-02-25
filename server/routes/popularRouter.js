import express from "express";
import getPopularRecipesHandler from "../controllers/recipes/popularRecipe.js";
// import { authMiddleware } from "../auth/auth.middlewares.js";

const popularRouter = express.Router();

popularRouter.get(
  "/",
  // authMiddleware,
  getPopularRecipesHandler
);

export default popularRouter;
