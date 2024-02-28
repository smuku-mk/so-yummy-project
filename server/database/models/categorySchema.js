import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  _id: String,
  title: String,
  thumb: String,
  description: String
});

export default mongoose.model("Category", categorySchema, "categoriesList");
