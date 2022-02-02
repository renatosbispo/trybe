const book = (sequelize, DataTypes) => {
  return sequelize.define('book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
  }, {
    underscored: true,
  });
};

module.exports = book;
