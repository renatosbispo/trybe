const admin = require('./admin');
const auth = require('./auth');
const error = require('./error');
const validatePassword = require('./validatePassword');
const validateUsername = require('./validateUsername');

module.exports = {
  admin,
  auth,
  error,
  validatePassword,
  validateUsername,
};
