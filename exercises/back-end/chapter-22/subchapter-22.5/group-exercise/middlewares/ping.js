function pingMiddleware(_, res) {
  res.status(200).send('pong!');
}

module.exports = pingMiddleware;
