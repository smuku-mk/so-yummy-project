import { Schema, model, Types } from "mongoose";

const recipeSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Write title for your recipe"],
    },
    description: {
      type: String,
      required: [true, "Write description for your recipe"],
    },
    category: {
      type: String,
      required: [true, "Set category for your recipe"],
    },
    time: {
      type: Number,
      required: [true, "Set cooking time for your recipe"],
    },
    ingredients: {
      type: Array,
      default: [],
    },
    thumb: {
      type: String,
      required: [true, "thumb is required"],
    },
    preview: {
      type: String,
      required: [true, "preview is required"],
    },
    instructions: {
      type: String,
      required: [true, "Write your instructions"],
    },
    favorites: {
      type: Array,
      default: [],
    },
    popularity: {
      type: Number,
      default: 0,
    },
    owner: {
      type: Types.ObjectId,
      ref: "users",
    },
  },
  { versionKey: false, timestamps: true }
);

const Recipe = model("Recipe", recipeSchema);

export default Recipe;
