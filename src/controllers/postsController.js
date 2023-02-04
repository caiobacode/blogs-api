const postsService = require('../services/postsService');

const getPosts = async (req, res) => {
  const { type, data } = await postsService.getPosts();
  res.status(type).json(data);
};

module.exports = {
  getPosts,
};