const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const authToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const verify = jwt.verify(authorization, JWT_SECRET);
    req.user = verify;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authToken;