const userService = require('../services/userService');

const postUser = async (req, res) => {
  const { type, data } = await userService.postUser(req.body);
  res.status(type).json(data);
};

const getUsers = async (req, res) => {
  const { type, data } = await userService.getUsers();
  res.status(type).json(data);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { type, data } = await userService.getUserById(id);
  res.status(type).json(data);
};

module.exports = {
  postUser,
  getUsers,
  getUserById,
};