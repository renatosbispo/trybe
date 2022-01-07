const readline = require('readline-sync');

const scripts = [
  {
    name: 'BMI',
    path: './bmi.js',
  },
  {
    name: 'Average Speed',
    path: './average-speed.js',
  },
  {
    name: 'Lottery',
    path: './lottery.js',
  },
  {
    name: 'Factorial',
    path: './factorial.js',
  },
  {
    name: 'Fibonacci',
    path: './fibonacci.js',
  },
];

console.log('My Scripts');
console.log('----------');

scripts.forEach(({ name }, index) => {
  console.log(`[${index + 1}] ${name}`);
});

const chosenScriptIndex =
  readline.questionInt('\nChoose a script to run: ') - 1;
const chosenScript = scripts[chosenScriptIndex];

console.log(`\nRunning ${chosenScript.path}...\n`);

require(chosenScript.path);
