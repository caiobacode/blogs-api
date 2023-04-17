const authCategoryName = (req, res, next) => {
  const { name } = req.body;
  const invalidNameMessage = { message: '"name" is required' };
  if (!name) return res.status(400).json(invalidNameMessage); 
  next();
};

module.exports = { authCategoryName };