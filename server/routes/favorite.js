import express from "express";
import { addToFav} from "../controllers/favorite/addToFav.js";
import { removeFromFav } from "../controllers/favorite/removeFromFav.js";
import { getUserFavs } from "../controllers/favorite/getUserFavs.js";
// import { authMiddleware } from "../auth/auth.middlewares.js";d

const favRouter = express.Router();

favRouter.post("/:userId/favorites", addToFav);
favRouter.delete("/:userId/favorites", removeFromFav); //authMiddleware
favRouter.get("/:userId/favorites", getUserFavs); //authMiddleware

export default favRouter;