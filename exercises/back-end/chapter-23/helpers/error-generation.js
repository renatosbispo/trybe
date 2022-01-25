function addContextToErrorMessageAndRethrow(error, context) {
  error.message = `[${context}] ${error.message}`;
  throw error;
}

function HttpError(message, code) {
  this.message = message;
  this.code = code;
}

module.exports = {
  addContextToErrorMessageAndRethrow,
  HttpError,
};
