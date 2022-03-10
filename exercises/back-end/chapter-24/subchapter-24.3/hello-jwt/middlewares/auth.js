require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ error: { message: 'Token not found' } });
  }

  try {
    const payload = jwt.verify(token, process.env.SECRET);

    res.status(200).json(payload);
  } catch (error) {
    next(error);
  }
};