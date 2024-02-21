import app from "./app.js";
import "dotenv/config";
import connectToDb from "./database/db.js";

const PORT = process.env.PORT || 5000;

const runApplication = async () => {
  await connectToDb();
  app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`);
  });
};

runApplication();
