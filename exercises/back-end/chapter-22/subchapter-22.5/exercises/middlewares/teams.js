const {
  teams: { isValidCountry, isValidInitials, isValidName, loadTeams, saveTeams },
} = require('../helpers');

const all = {
  validate(req, res, next) {
    const { name, initials, country } = req.body;

    if (
      !isValidCountry(country) ||
      !isValidInitials(initials) ||
      !isValidName(name)
    ) {
      return res.status(400).json({ message: 'Invalid data!' });
    }

    next();
  },
  add(req, res) {
    const { name, initials, country, league } = req.body;

    const newTeam = { name, initials, country, league };
    const currentTeams = loadTeams();
    const newTeams = [...currentTeams, newTeam];

    saveTeams(newTeams);

    res.status(200).json({ team: newTeam });
  },
  retrieve(_, res) {
    res.status(200).json({ teams: loadTeams() });
  },
};

module.exports = {
  all,
};
