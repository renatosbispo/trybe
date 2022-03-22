const Joi = require('joi');

module.exports = (req, _res, next) => {
  try {
    const { username } = req.body;
    const usernameSchema = Joi.string().alphanum().min(5).label('username');
    const { error } = usernameSchema.validate(username);

    if (error) {
      throw error;
    }

    next();
  } catch (error) {
    next(error);
  }
};
