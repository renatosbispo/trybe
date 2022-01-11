const { exercise1, exercise2, exercise3 } = require('./exercises1-3');
const { printOnPromiseResolve, printOnPromiseReject } = require('./utils');
const {
  exercise4part1,
  exercise4part2,
  exercise4part3,
  exercise4part4,
  exercise4part5,
  exercise4part6,
} = require('./exercise4');
const { exercise5 } = require('./exercise5');
const { exercise6 } = require('./exercise6');
const { exercise7 } = require('./exercise7');
const { exercise8 } = require('./exercise8');

function printExerciseHeader(exerciseNumber) {
  const exerciseTitle = `\nExercise ${exerciseNumber}`;
  let separator = '';

  for (let index = 0; index < exerciseTitle.length; index += 1) {
    separator += '-';
  }

  console.log(exerciseTitle);
  console.log(separator);
}

async function runExercise(exercise, ...args) {
  try {
    const data = args.length > 0 ? await exercise(...args) : await exercise();
    printOnPromiseResolve(data);
  } catch (error) {
    printOnPromiseReject(error);
  }
}

(async () => {
  printExerciseHeader('1');
  await runExercise(exercise1, 7, 3, 5);

  printExerciseHeader('2');
  await exercise2();

  printExerciseHeader('3');
  await exercise3();

  printExerciseHeader('4.1');
  await exercise4part1();
  printExerciseHeader('4.2');
  await runExercise(exercise4part2, 5);
  printExerciseHeader('4.3');
  await exercise4part3();
  printExerciseHeader('4.4');
  await exercise4part4();
  printExerciseHeader('4.5');
  await exercise4part5();
  printExerciseHeader('4.6');
  await exercise4part6();

  printExerciseHeader('5');
  await exercise5();

  printExerciseHeader('6');
  await exercise6();

  printExerciseHeader('7');
  await exercise7();

  printExerciseHeader('8');
  runExercise(exercise8, 75);
})();
