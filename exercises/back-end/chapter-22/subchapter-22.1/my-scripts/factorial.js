const readline = require('readline-sync');

const getFactorial = (number) => {
  if (number === 1) return 1;

  return number * getFactorial(number - 1);
};

let number = 0;

while (number < 1) {
  number = readline.questionInt('Calculate factorial of: ');

  if (number < 1) {
    console.log('\nEnter an integer greater than 0.\n');
  }
}

console.log(`\nFactorial(${number}) = ${getFactorial(number)}`);
