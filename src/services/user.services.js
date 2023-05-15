const { User } = require('../models');

const allUsers = () => User.findAll();

const createUser = async ({ displayName, email, password, image }) =>
   User.create({ displayName, email, password, image });

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  if (!user) return false;
  const { password: _password, ...userInfo } = user;
  return userInfo;
};

module.exports = {
  allUsers,
  createUser,
  getUserById,
};
