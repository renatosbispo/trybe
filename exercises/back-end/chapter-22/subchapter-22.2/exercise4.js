const fs = require('fs');
const { printOnPromiseReject } = require('./utils');

const simpsonsFilePath = './simpsons.json';

async function exercise4part1() {
  try {
    const fileContents = await fs.promises.readFile(simpsonsFilePath, 'utf8');
    const simpsons = JSON.parse(fileContents);
    simpsons.forEach(({ id, name }) => console.log(`${id} - ${name}`));
  } catch (error) {
    printOnPromiseReject(error);
  }
}

module.exports = {
  exercise4part1,
};
