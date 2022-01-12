const fs = require('fs');

const simpsonsFile = './simpsons.json';

function readSimpsons() {
  try {
    const simpsons = fs.readFileSync(simpsonsFile, 'utf8');

    return JSON.parse(simpsons);
  } catch (error) {
    return error;
  }
}

function writeSimpsons(simpsons) {
  try {
    fs.writeFileSync(simpsonsFile, JSON.stringify(simpsons, null, 2));
  } catch (error) {
    return error;
  }
}

export.modules = {
  readSimpsons,
  writeSimpsons
}
