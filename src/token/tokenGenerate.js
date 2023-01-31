const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const tokenGenerate = (payload) => jwt.sign(payload, JWT_SECRET);

module.exports = tokenGenerate;