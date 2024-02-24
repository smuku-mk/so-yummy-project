import express from "express";
import { getRecipeByTitle } from "../controllers/getRecipeByTitle.js";

const searchRouter = express.Router();

searchRouter.get("/", getRecipeByTitle);

export default searchRouter;
