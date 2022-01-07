const readline = require('readline-sync');

const weight = readline.questionFloat('What is your weight? (kg) ');
const height = readline.questionInt('What is your height? (cm) ')
const imc = weight / (height / 100) ** 2;

console.log(`Your IMC is ${imc}`);
