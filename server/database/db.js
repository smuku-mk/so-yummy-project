import mongoose from "mongoose";
import "dotenv/config";

const uriDb = process.env.DATABASE_URL;

const connectToDb = async () => {
  try {
    await mongoose.connect(uriDb);
    console.log("Database connection successful");
  } catch (err) {
    console.log(`Failed to connect to database. Error message: ${err.message}`);
    process.exit(1);
  }
};
export default connectToDb;
