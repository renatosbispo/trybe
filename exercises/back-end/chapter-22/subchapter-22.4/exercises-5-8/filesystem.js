const fs = require('fs');
const { builtinModules } = require('module');

const simpsonsFile = './simpsons.json';

function readSimpsons() {
  try {
    const simpsons = fs.readFileSync(simpsonsFile, 'utf8');

    return {
      simpsons: JSON.parse(simpsons),
      error: null,
    };
  } catch (error) {
    return {
      error,
    };
  }
}

function writeSimpsons(simpsons) {
  try {
    fs.writeFileSync(simpsonsFile, JSON.stringify(simpsons, null, 2));

    return {
      error: null,
    };
  } catch (error) {
    return {
      error,
    };
  }
}

module.exports = {
  readSimpsons,
  writeSimpsons,
};
