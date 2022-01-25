function handleError(error, _, res, _) {
  const { message, code } = error;

  res.status(code || 500).json({ error: { message }});
}

module.exports = handleError;
