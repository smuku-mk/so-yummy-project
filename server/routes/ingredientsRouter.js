import express from "express";
import { listIngredients } from "../controllers/listIngredients.js";

const ingredientsRouter = express.Router();

ingredientsRouter.get("/list", listIngredients);

export default ingredientsRouter;
