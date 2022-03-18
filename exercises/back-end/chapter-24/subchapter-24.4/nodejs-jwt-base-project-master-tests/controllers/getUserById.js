module.exports = async (req, res) => {
  try {
    const { id: tokenUserId } = req.user;
    const { id: paramsUserId } = req.params;

    if (tokenUserId !== parseInt(paramsUserId)) {
      throw new Error('Acesso negado');
    }
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
