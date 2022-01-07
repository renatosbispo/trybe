const readline = require('readline-sync');

const getFibonacci = (n) => {
  const fibonacciSequence = [];
  let previousNumber = 1,
    currentNumber = 1;

  for (let index = 0; index < n; index += 1) {
    if (index === 0) {
      fibonacciSequence.push(previousNumber);
    } else if (index === 1) {
      fibonacciSequence.push(currentNumber);
    } else {
      [previousNumber, currentNumber] = [
        currentNumber,
        previousNumber + currentNumber,
      ];
      fibonacciSequence.push(currentNumber);
    }
  }

  return [...fibonacciSequence];
};

let number = 0;

while (number < 1) {
  number = readline.questionInt('Fibonacci sequence size: ');

  if (number < 1) {
    console.log('\nEnter an integer greater than 0.\n');
  }
}

console.log(
  `\nThese are the first ${number} fibonacci numbers: ${getFibonacci(number)}`
);
