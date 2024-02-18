import express from "express";
import cors from "cors";
import logger from "morgan";
import "dotenv/config";
import ingredientsRouter from "./routes/ingredientsRouter.js";
import recipesRouter from "./routes/recipesRouter.js";

import { usersRouter } from "./users/user.router.js";

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

//app.use(middleware);
app.use(cors());
app.use(express.json());
app.use(logger(formatsLogger));
app.use("/ingredients", ingredientsRouter);
app.use("/recipes", recipesRouter);

app.use("/users", usersRouter);
app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("500 Internal Server Error");
});

export default app;
