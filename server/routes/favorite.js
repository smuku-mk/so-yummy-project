import express from "express";
import { addToFav} from "../controllers/favorite/addToFav.js";
import { removeFromFav } from "../controllers/favorite/removeFromFav.js";
import { getUserFavs } from "../controllers/favorite/getUserFavs.js";
import { auth } from "../middlewares/user/auth.js";
import { catchErr } from "../middlewares/catchErr.js";

export const favRouter = express.Router();

favRouter.post("/:userId/favorites", auth, catchErr(addToFav));
favRouter.delete("/:userId/favorites", auth,  catchErr(removeFromFav));
favRouter.get("/:userId/favorites", auth, catchErr(getUserFavs));