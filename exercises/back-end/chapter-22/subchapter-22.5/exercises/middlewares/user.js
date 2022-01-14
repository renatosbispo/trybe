const signup = {
  validate(req, res, next) {
    const { username, email, password } = req.body;

    const isValidUsername = () => {
      return username.length > 3;
    };

    const isValidEmail = () => {
      return /^\S+@\S+\.\S+$/.test(email);
    };

    const isValidPassword = () => {
      return (
        password.length > 3 &&
        password.length < 9 &&
        !Number.isNaN(Number(password))
      );
    };

    if (!isValidUsername() || !isValidEmail() || !isValidPassword()) {
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
  signup,
};
