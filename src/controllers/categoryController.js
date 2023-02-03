const categoryService = require('../services/categoryService');

const postCategory = async (req, res) => {
  const { name } = req.body;
  const { type, data } = await categoryService.postCategory(name);
  res.status(type).json(data);
};

const getCategories = async (req, res) => {
  const { type, data } = await categoryService.getCategories();
  res.status(type).json(data);
};

module.exports = {
  postCategory,
  getCategories,
};