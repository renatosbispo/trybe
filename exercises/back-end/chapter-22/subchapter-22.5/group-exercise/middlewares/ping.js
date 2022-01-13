function pingMiddleware(_, res, next) {
  res.status(200).json({ message: 'pong' });

  next();
}

module.exports = {
  pingMiddleware,
}
