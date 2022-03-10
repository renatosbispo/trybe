const Joi = require('joi');

module.exports = (req, _res, next) => {
  try {
    const { password } = req.body;
    const passwordSchema = Joi.string().min(5).label('password');
    const { error } = passwordSchema.validate(password);

    if (error) {
      throw error;
    }

    next();
  } catch (error) {
    next(error);
  }
};
