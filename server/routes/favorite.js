import express from "express";
import { addToFav, removeFromFav, getUserFavs } from "../controllers/favorites";
// import { authMiddleware } from "../auth/auth.middlewares.js";d

const favRouter = express.Router();

favRouter.post("/:userId/favorites", addToFav);

favRouter.delete("/:userId/favorites", removeFromFav); //authMiddleware

favRouter.get("/:userId/favorites", getUserFavs); //authMiddleware
