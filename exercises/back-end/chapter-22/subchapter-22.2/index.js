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

function printExerciseHeader(exerciseNumber) {
  const exerciseTitle = `\nExercise ${exerciseNumber}`;
  let separator = '';

  for (let index = 0; index < exerciseTitle.length; index += 1) {
    separator += '-';
  }

  console.log(exerciseTitle);
  console.log(separator);
}

async function runExercise1() {
  try {
    const result = await exercise1(7, 3, 5);
    printOnPromiseResolve(result);
  } catch (error) {
    printOnPromiseReject(error);
  }
}

async function runExercise4part2(desiredSimpsonId) {
  try {
    const data = await exercise4part2(desiredSimpsonId);
    printOnPromiseResolve(data);
  } catch (error) {
    printOnPromiseReject(error);
  }
}

(async () => {
  printExerciseHeader('1');
  await runExercise1();

  printExerciseHeader('2');
  await exercise2();

  printExerciseHeader('3');
  await exercise3();

  printExerciseHeader('4.1');
  await exercise4part1();
  printExerciseHeader('4.2');
  await runExercise4part2(5);
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
})();
