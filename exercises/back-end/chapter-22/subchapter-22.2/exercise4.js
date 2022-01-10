const fs = require('fs');
const { printOnPromiseReject } = require('./utils');

const simpsonsFilePath = './simpsons.json';
const simpsonFamilyFilePath = './simpsonFamily.json';

async function readFromSimpsonsFile(filePath) {
  try {
    const fileContents = await fs.promises.readFile(filePath, 'utf8');
    const simpsons = JSON.parse(fileContents);

    return simpsons;
  } catch (error) {
    printOnPromiseReject(error);
  }
}

function writeToSimpsonsFile(simpsons, filePath) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(simpsons, null, 2));
  } catch (error) {
    console.error(error);
  }
}

async function exercise4part1() {
  try {
    const simpsons = await readFromSimpsonsFile(simpsonsFilePath);
    simpsons.forEach(({ id, name }) => console.log(`${id} - ${name}`));
  } catch (error) {
    printOnPromiseReject(error);
  }
}

async function exercise4part2(desiredSimpsonId) {
  return new Promise(async (resolve, reject) => {
    const simpsons = await readFromSimpsonsFile(simpsonsFilePath);
    const desiredSimpson = simpsons.find(
      ({ id }) => desiredSimpsonId === Number(id)
    );

    if (desiredSimpson) {
      resolve(desiredSimpson);
    }

    reject(new Error(`No simpson with id ${desiredSimpsonId} was found.`));
  });
}

async function exercise4part3() {
  const simpsons = await readFromSimpsonsFile(simpsonsFilePath);
  const updatedSimpsons = simpsons.filter(
    ({ id }) => id !== '10' && id !== '6'
  );

  writeToSimpsonsFile(updatedSimpsons, simpsonsFilePath);
  console.log(await readFromSimpsonsFile(simpsonsFilePath));
}

async function exercise4part4() {
  const simpsons = await readFromSimpsonsFile(simpsonsFilePath);
  const simpsonFamily = simpsons.filter(
    ({ id }) => Number(id) >= 1 && Number(id) <= 4
  );

  writeToSimpsonsFile(simpsonFamily, simpsonFamilyFilePath);
  console.log(await readFromSimpsonsFile(simpsonFamilyFilePath));
}

async function exercise4part5() {
  const simpsons = await readFromSimpsonsFile(simpsonsFilePath);
  const simpsonFamily = await readFromSimpsonsFile(simpsonFamilyFilePath);

  const nelsonMuntz = simpsons.find(({ name }) => name === 'Nelson Muntz');
  const updatedSimpsonFamily = [...simpsonFamily, nelsonMuntz];

  writeToSimpsonsFile(updatedSimpsonFamily, simpsonFamilyFilePath);
  console.log(await readFromSimpsonsFile(simpsonFamilyFilePath));
}

async function exercise4part6() {
  const simpsons = await readFromSimpsonsFile(simpsonsFilePath);
  const simpsonFamily = await readFromSimpsonsFile(simpsonFamilyFilePath);

  const maggieSimpson = simpsons.find(({ name }) => name === 'Maggie Simpson');
  const updatedSimpsonFamily = simpsonFamily.filter(
    ({ name }) => name !== 'Nelson Muntz'
  );

  writeToSimpsonsFile(
    [...updatedSimpsonFamily, maggieSimpson],
    simpsonFamilyFilePath
  );

  console.log(await readFromSimpsonsFile(simpsonFamilyFilePath));
}

module.exports = {
  exercise4part1,
  exercise4part2,
  exercise4part3,
  exercise4part4,
  exercise4part5,
  exercise4part6,
};
