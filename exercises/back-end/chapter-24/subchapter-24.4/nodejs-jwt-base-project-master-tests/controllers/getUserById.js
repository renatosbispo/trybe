const { User } = require('../models');

module.exports = async (req, res) => {
  try {
    const { id: tokenUserId } = req.user;
    const { id: paramsUserId } = req.params;
    const parsedParamsUserId = parseInt(paramsUserId);

    if (tokenUserId !== parsedParamsUserId) {
      throw new Error('Acesso negado');
    }

    const user = await User.findByPk(parsedParamsUserId);

    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
