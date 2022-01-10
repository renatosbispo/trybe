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

module.exports = exercise1;
