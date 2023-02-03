const { Category } = require('../models');

const postCategory = async (name) => {
  const sla = await Category.create({ name });
  return { type: 201, data: sla };
};

module.exports = {
  postCategory,
};