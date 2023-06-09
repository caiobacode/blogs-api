const { User } = require('../models');
const tokenGenerate = require('../token/tokenGenerate');

const login = async (body) => {
  const { email, password } = body;
  
  const oneUser = await User.findAll().then((result) => result
    .filter((u) => u.email === email && u.password === password));

  if (oneUser.length === 0) return { type: 400, data: { message: 'Invalid fields' } };

  return { type: 200, data: { token: tokenGenerate({ email }) } };
};

module.exports = {
  login,
};