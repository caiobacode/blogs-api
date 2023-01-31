const authLogin = (req, res, next) => {
  const { email, password } = req.body;
  const message = { message: 'Some required fields are missing' };
  if (!email) return res.status(400).json(message);
  if (!password) return res.status(400).json(message);
  next();
};

module.exports = authLogin;