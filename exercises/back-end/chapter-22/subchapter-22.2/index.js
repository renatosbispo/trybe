const exercise1 = require('./exercise1.js');

async function runExercise1() {
  try {
    const result = await exercise1(7, 3, 5);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  await runExercise1();
})();
