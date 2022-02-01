require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DEV_MYSQL_USER,
    password: process.env.DEV_MYSQL_PASSWORD,
    database: process.env.DEV_DATABASE_NAME,
    host: process.env.DEV_MYSQL_HOST,
    dialect: 'mysql',
  },
};
