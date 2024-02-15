import mongoose from "mongoose";
import "dotenv/config";

const uriDb = process.env.DB_URI;

const connectToDb = async () => {
  try {
    await mongoose.connect(uriDb, { dbName: "so-yummy" });
    console.log("Database connection successful");
  } catch (err) {
    console.log(`Failed to connect to database. Error message: ${err.message}`);
    process.exit(1);
  }
};
export default connectToDb;
