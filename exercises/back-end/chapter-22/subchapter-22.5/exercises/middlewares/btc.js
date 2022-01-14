const axios = require('axios').default;

const price = {
  validate(req, res, next) {
    const token = req.headers.authorization;

    if (!token || !(token.length === 12) || !/^[a-z0-9]+$/.test(token)) {
      return res.status(401).json({ message: 'Invalid token.' });
    }

    next();
  },
  async fetch(_, res) {
    const { data } = await axios.get(
      'https://api.coindesk.com/v1/bpi/currentprice/BTC.json)'
    );

    res.status(200).json(data);
  },
};

module.exports = {
  price,
};
