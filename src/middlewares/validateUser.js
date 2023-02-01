const schemas = require('./schemas');

const authName = (req, res, next) => {
  const { displayName } = req.body;
  const { error } = schemas.validateName.validate(displayName);
  console.log(error);
  const invalidNameMessage = { message: '"displayName" length must be at least 8 characters long' };
  if (error) return res.status(400).json(invalidNameMessage); 
  next();
};

const authEmail = (req, res, next) => {
  const { email } = req.body;
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const invalidNameMessage = { message: '"email" must be a valid email' };
  if (!regexEmail.test(email)) return res.status(400).json(invalidNameMessage); 
  next();
};

const authPassword = (req, res, next) => {
  const { password } = req.body;
  const { error } = schemas.validatePassword.validate(password);
  const invalidNameMessage = { message: '"password" length must be at least 6 characters long' };
  if (error) return res.status(400).json(invalidNameMessage); 
  next();
};

module.exports = {
  authName,
  authEmail,
  authPassword,
};