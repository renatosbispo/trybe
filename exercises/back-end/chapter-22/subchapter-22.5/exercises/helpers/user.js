const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(6).toString('hex');
}

function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}

function isValidPassword(password) {
  return (
    password.length > 3 &&
    password.length < 9 &&
    !Number.isNaN(Number(password))
  );
}

function isValidUsername(username) {
  return username.length > 3;
}

module.exports = {
  generateToken,
  isValidEmail,
  isValidPassword,
  isValidUsername,
};
