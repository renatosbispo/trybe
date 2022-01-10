const { printOnPromiseResolve, printOnPromiseReject } = require('./utils.js');

function exercise1(number1, number2, number3) {
  return new Promise((resolve, reject) => {
    if (
      typeof number1 != 'number' ||
      typeof number2 != 'number' ||
      typeof number3 != 'number'
    ) {
      reject('Provide only numbers to the function!');
    }

    const result = (number1 + number2) * number3;

    if (result < 50) {
      reject('Result was too low (below 50).');
    }

    resolve(result);
  });
}

async function exercise2() {
  const getRandomNumberBetween1and100 = () =>
    Math.floor(Math.random() * 100 + 1);

  const randomNumber1 = getRandomNumberBetween1and100();
  const randomNumber2 = getRandomNumberBetween1and100();
  const randomNumber3 = getRandomNumberBetween1and100();

  exercise1(randomNumber1, randomNumber2, randomNumber3)
    .then((data) => printOnPromiseResolve(data))
    .catch((error) => printOnPromiseReject(error));
}

async function exercise3() {
  const getRandomNumberBetween1and100 = () =>
    Math.floor(Math.random() * 100 + 1);

  const randomNumber1 = getRandomNumberBetween1and100();
  const randomNumber2 = getRandomNumberBetween1and100();
  const randomNumber3 = getRandomNumberBetween1and100();

  try {
    const result = await exercise1(randomNumber1, randomNumber2, randomNumber3);
    printOnPromiseResolve(result);
  } catch (error) {
    printOnPromiseReject(error);
  }
}

module.exports = {
  exercise1,
  exercise2,
  exercise3,
};
