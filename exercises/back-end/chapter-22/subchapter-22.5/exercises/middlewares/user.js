const {
  user: { generateToken, isValidEmail, isValidPassword, isValidUsername },
} = require('../helpers');

const login = {
  validate(req, res, next) {
    const { email, password } = req.body;

    if (!isValidEmail(email) || !isValidPassword(password)) {
      return res.status(400).json({ message: 'Incorrect email or password.' });
    }

    next();
  },
  complete(_, res) {
    res.status(200).json({ token: generateToken() });
  },
};

const signup = {
  validate(req, res, next) {
    const { username, email, password } = req.body;

    if (
      !isValidUsername(username) ||
      !isValidEmail(email) ||
      !isValidPassword(password)
    ) {
      return res.status(400).json({ message: 'Invalid data!' });
    }

    next();
  },
  complete(req, res) {
    const { username, email, password } = req.body;

    res.status(201).json({ message: 'User created!' });
  },
};

module.exports = {
  login,
  signup,
};
