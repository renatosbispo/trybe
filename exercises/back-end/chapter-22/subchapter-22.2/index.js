const { exercise1, exercise2, exercise3 } = require('./exercises.js');
const { printOnPromiseResolve, printOnPromiseReject } = require('./utils.js');

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
  printExerciseHeader(1);
  try {
    const result = await exercise1(7, 3, 5);
    printOnPromiseResolve(result);
  } catch (error) {
    printOnPromiseReject(error);
  }
}

(async () => {
  await runExercise1();

  printExerciseHeader(2);
  await exercise2();

  printExerciseHeader(3);
  await exercise3();
})();
