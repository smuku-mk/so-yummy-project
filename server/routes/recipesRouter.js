import express from "express";
import { getRecipeById } from "../controllers/getRecipeById.js";

const recipesRouter = express.Router();

recipesRouter.get("/:id", getRecipeById);

export default recipesRouter;
