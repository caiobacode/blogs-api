const { User } = require('../models');
const tokenGenerate = require('../token/tokenGenerate');

const postUser = async (body) => {
  const { displayName, email, password, image } = body;
  
  const allUsers = await User.findAll();
  const oneUser = allUsers.filter((u) => u.email === email);

  if (oneUser.length !== 0) return { type: 409, data: { message: 'User already registered' } };

  await User.create({ displayName, email, password, image });
  return { type: 201, data: { token: tokenGenerate({ email }) } };
};

module.exports = { 
  postUser,
};