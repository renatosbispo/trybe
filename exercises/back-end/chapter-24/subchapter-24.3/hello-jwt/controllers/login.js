require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const { username, password } = req.body;

    const isAdmin = username === 'admin' && password === 's3nh4S3gur4???';

    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const token = jwt.sign(
      { username, admin: isAdmin },
      process.env.SECRET,
      jwtConfig,
    );

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
