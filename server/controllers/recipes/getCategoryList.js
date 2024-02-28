import Category from '../../database/models/categorySchema.js';

export const getCategoryList = async (req, res) => {
    return res.json(await Category.find().sort('name'));
  };