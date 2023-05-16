const { User } = require('../models');

const allUsers = () => User.findAll();

const createUser = async ({ displayName, email, password, image }) =>
   User.create({ displayName, email, password, image });

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  
  return user;
};

module.exports = {
  allUsers,
  createUser,
  getUserById,
};
