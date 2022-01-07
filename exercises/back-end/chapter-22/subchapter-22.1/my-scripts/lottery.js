const readline = require('readline-sync');
const _ = require('lodash');

let wannaPlayAgain = true;

while (wannaPlayAgain) {
  const chosenNumber = readline.questionInt('Choose a number (1-10): ');
  const drawnNumber = _.random(1, 10);

  const resultMessage = chosenNumber === drawnNumber
    ? 'Congratulations, you won!'
    : 'Whoops... You lost, maybe next time.'

  console.log(`\nDrawn number: ${drawnNumber}`);
  console.log(`${resultMessage}\n`);

  wannaPlayAgain = readline.question('Wanna play again? (y/n) ') === 'y';
  console.log('');
}
