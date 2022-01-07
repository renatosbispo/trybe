const readline = require('readline-sync');

const weight = readline.questionFloat('What is your weight? (kg) ');
const height = readline.questionInt('What is your height? (cm) ')
const imc = weight / (height / 100) ** 2;

let weightCategory = null;
if (imc < 18.5) {
  weightCategory = 'Underweight';
} else if (imc < 25) {
  weightCategory = 'Healthy Weight';
} else if (imc < 30) {
  weightCategory = 'Overweight';
} else {
  weightCategory = 'Obesity';
}

console.log(`\nYour IMC is ${imc.toFixed(2)} (${weightCategory})`);
