function helloMiddleware(req, res, next) {
  const { name } = req.body;

  res.status(201).json({ message: `Hello, ${name}!` });

  next();
}

module.exports = {
  helloMiddleware,
};
