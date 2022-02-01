const book = (sequelize, DataTypes) => {
  return sequelize.define('book', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  });
};

module.exports = book;
