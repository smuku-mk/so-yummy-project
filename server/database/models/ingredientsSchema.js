import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema({
  ttl: String,
  desc: String,
  t: String,
  thb: String,
});

export default mongoose.model("Ingredient", ingredientSchema);
