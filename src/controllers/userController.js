const userService = require('../services/userService');

const postUser = async (req, res) => {
  const { type, data } = await userService.postUser(req.body);
  res.status(type).json(data);
};

module.exports = {
  postUser,
};