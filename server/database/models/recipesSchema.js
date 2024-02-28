import mongoose from "mongoose";

const ingredients = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  measure: String,
});
const owner = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: String,
});

const recipeSchema = new mongoose.Schema({
  title: String,
  category: String,
  area: String,
  instructions: String,
  description: String,
  thumb: String,
  preview: String,
  time: String,
  favorites: [String],
  youtube: String,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  popularity: { type: Number, default: 0 },
  owner: [owner],
  ingredients: [ingredients],
},
{ versionKey: false, timestamps: true });

export default mongoose.model("Recipe", recipeSchema);
