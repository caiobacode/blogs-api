const loginService = require('../services/loginService');

const login = async (req, res) => {
  const { type, data } = await loginService.login('strting');
  res.status(type).json(data);
};

module.exports = {
  login,
};