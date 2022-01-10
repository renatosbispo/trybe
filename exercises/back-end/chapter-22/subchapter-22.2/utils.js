function printOnPromiseResolve(data) {
  console.log('Promise resolved:', data);
}

function printOnPromiseReject(error) {
  console.error('Promise rejected:', error);
}

module.exports = {
  printOnPromiseResolve,
  printOnPromiseReject,
};
