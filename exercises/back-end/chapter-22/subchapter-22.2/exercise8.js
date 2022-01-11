const { rejects } = require('assert');

function exercise8(number) {
  return new Promise((resolve, reject) => {
    if (number % 3 === 0 && number % 5 === 0) {
      resolve('FizzBuzz');
    } else if (number % 3 === 0) {
      resolve('Fizz');
    } else if (number % 5 === 0) {
      resolve('Buzz');
    }

    reject(number);
  });
}

module.exports = {
  exercise8,
};
