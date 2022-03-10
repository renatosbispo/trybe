require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const { username } = req.body;

    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const token = jwt.sign(
      { username, admin: false },
      process.env.SECRET,
      jwtConfig,
    );

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
