import app from "./app.js";
import "dotenv/config";
import connectToDb from "./database/db.js";

const PORT = process.env.PORT || 3000;

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`);
  });
};

const runApplication = async () => {
  //await connectToDb();
  startServer();
};

runApplication();
