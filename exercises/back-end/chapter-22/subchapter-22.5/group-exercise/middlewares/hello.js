function helloMiddleware(req, res) {
  const { name } = req.body;

  res.status(201).json({ message: `Hello, ${name}!` });
}

module.exports = helloMiddleware;
