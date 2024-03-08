import express from "express";
import cors from "cors";
import logger from "morgan";
import swaggerUi from "swagger-ui-express";
import "dotenv/config";

import { ingredientsRouter } from "./routes/ingredientsRouter.js";
import { recipesRouter } from "./routes/recipesRouter.js";
import { shoppingListRouter } from "./routes/shoppingListRouter.js";
import { popularRouter } from "./routes/popularRouter.js";
import { searchRouter } from "./routes/searchRouter.js";
import { ownRecipesRouter } from "./routes/ownRecipeRouter.js";
import { favRouter } from "./routes/favorite.js";
import { usersRouter } from "./routes/usersRouter.js";
import { subscribeRouter } from "./routes/subscribe.router.js";

import { swaggerDocs } from "./swagger.js";

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(cors());
app.use(express.json());
app.use(logger(formatsLogger));

app.use("/ingredients", ingredientsRouter);
app.use("/recipes", recipesRouter);
app.use("/shopping-list", shoppingListRouter);
app.use("/popular-recipes", popularRouter);
app.use("/users", usersRouter);
app.use("/search", searchRouter);
app.use("/ownRecipes", ownRecipesRouter);
app.use("/favorite", favRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/subscribe", subscribeRouter);

app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("500 Internal Server Error");
});

export default app;
