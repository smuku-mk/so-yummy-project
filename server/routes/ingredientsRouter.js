import express from "express";
import { listIngredients } from "../controllers/listIngredients.js";
import { searchIngredient } from "../controllers/searchIngredient.js";

const ingredientsRouter = express.Router();

ingredientsRouter.get("/list", listIngredients);
ingredientsRouter.get("/", searchIngredient);

export default ingredientsRouter;
