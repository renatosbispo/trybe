const getPosts = require('../controllers/posts');
const createUsers = require('../controllers/createUser');
const login = require('../controllers/login');
const getUserById = require('../controllers/getUserById');
const getUsers = require('../controllers/getUsers');

module.exports = {
  getPosts,
  createUsers,
  getUserById,
  getUsers,
  login,
};
