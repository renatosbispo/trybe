require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ error: { message: 'Token not found' } });
  }

  try {
    const { username, admin } = jwt.verify(token, process.env.SECRET);

    req.userInfo = { username, admin };

    next();
  } catch (error) {
    res.status(401).json({ error: { message: error.message } });
  }
};