const { Category } = require('../models');

const authPostContent = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const allCategoryIds = await Category.findAll().then((r) => r.map((s) => Object.values(s)[0].id));

  const emptyMessage = { message: 'Some required fields are missing' };
  const invalidCategoryMessage = { message: 'one or more "categoryIds" not found' };

  if (!title) return res.status(400).json(emptyMessage);
  if (!content) return res.status(400).json(emptyMessage);
  if (!categoryIds) return res.status(400).json(emptyMessage);

  const validateCategories = categoryIds.every((id) => allCategoryIds.includes(id));
  if (!validateCategories) return res.status(400).json(invalidCategoryMessage);
  
  next();
};

const authNewPostContent = async (req, res, next) => {
  const { title, content } = req.body;

  const emptyMessage = { message: 'Some required fields are missing' };

  if (!title) return res.status(400).json(emptyMessage);
  if (!content) return res.status(400).json(emptyMessage);
  
  next();
};

module.exports = { authPostContent, authNewPostContent };