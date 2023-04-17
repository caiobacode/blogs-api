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

const getPostByTerm = async (req, res) => {
  const query = Object.values(req.query);
  const { type, data } = await postsService.getPostByTerm(query);
  res.status(type).json(data);
};

const insertPost = async (req, res) => {
  const { body, user: { email } } = req;
  const { type, data } = await postsService.insertPost(body, email);
  res.status(type).json(data);
};

const updatePost = async (req, res) => {
  const { body, user: { email }, params: { id } } = req;
  const { type, data } = await postsService.updatePost(body, id, email);
  res.status(type).json(data);
};

const deletePost = async (req, res) => {
  const { user: { email }, params: { id } } = req;
  console.log(email);
  const { type, data } = await postsService.deletePost(id, email);
  res.status(type).json(data);
};

module.exports = {
  getPosts,
  getPostById,
  getPostByTerm,
  insertPost,
  updatePost,
  deletePost,
};