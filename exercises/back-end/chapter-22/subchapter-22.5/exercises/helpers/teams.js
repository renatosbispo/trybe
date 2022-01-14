const fs = require('fs');
const teamsFilename = 'teams.json';


function isValidCountry(country) {
  return country.length > 3;
}

function isValidInitials(initials) {
  return initials.length < 4 && initials.toUpperCase() === initials;
}

function isValidName(name) {
  return name.length > 5;
}

function loadTeams() {
  const teams = fs.readFileSync(teamsFilename, 'utf8');

  return JSON.parse(teams);
}

function saveTeams(teams) {
  fs.writeFileSync(teamsFilename, JSON.stringify(teams, null, 2));
}

module.exports = {
  isValidCountry,
  isValidInitials,
  isValidName,
  loadTeams,
  saveTeams,
};
