require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'hospital_control',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
