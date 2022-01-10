const { exercise1, exercise2 } = require('./exercises.js');

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
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

function runExercise2() {
  printExerciseHeader(2);
  exercise2();
}

(async () => {
  await runExercise1();
  runExercise2();
})();
