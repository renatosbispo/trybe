const fs = require('fs');

function loadSimpsons() {
  const simpsonsJson = fs.readFileSync('simpsons.json', 'utf8');
  const simpsons = JSON.parse(simpsonsJson);

  return simpsons;
}

function saveSimpsons(simpsons) {
  fs.writeFileSync('simpsons.json', JSON.stringify(simpsons));
}

module.exports = {
  loadSimpsons,
  saveSimpsons
}
