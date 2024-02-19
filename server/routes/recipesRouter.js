import express from "express";
import { getRecipeById } from "../controllers/getRecipeById.js";
import { getRecipeByTitle } from "../controllers/getRecipeByTitle.js";

const recipesRouter = express.Router();

recipesRouter.get("/search", getRecipeByTitle);
recipesRouter.get("/:id", getRecipeById);

export default recipesRouter;
