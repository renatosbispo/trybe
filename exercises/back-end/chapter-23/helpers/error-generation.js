function HttpError(message, code) {
  this.message = message;
  this.code = code;
}

module.exports = {
  HttpError,
};
