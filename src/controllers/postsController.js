const postsService = require('../services/postsService');

const getPosts = async (req, res) => {
  const { type, data } = await postsService.getPosts();
  res.status(type).json(data);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const { type, data } = await postsService.getPostById(id);
  res.status(type).json(data);
};

const insertPost = async (req, res) => {
  const { body, user: { email } } = req;
  const { type, data } = await postsService.insertPost(body, email);
  res.status(type).json(data);
};

module.exports = {
  getPosts,
  getPostById,
  insertPost,
};