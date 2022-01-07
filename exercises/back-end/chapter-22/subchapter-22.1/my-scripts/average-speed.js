const readline = require('readline-sync');

const distance = readline.questionFloat('Distance (m): ');
const time = readline.questionFloat('Time (s): ');
const avgSpeed = distance / time;

console.log(`\nAverage speed = ${avgSpeed.toFixed(2)} m/s`);
