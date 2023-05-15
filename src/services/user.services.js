const { User } = require('../models');

const allusers = async () => {
    const users = await User.findAll();
    const usersList = users.map((dataValues) => {
        const { password: _password, ...user } = dataValues;
        return user;
    });
    return usersList;
};
const createUser = async (displayName, email, password, image) => {
    const result = await User.create({ displayName, email, password, image });
    return result;
};

const userId = async (id) => {
    const result = await User.findByPk(id);
    if (!result) return false;
    const { password: _password, ...user } = result.dataValues;
    return user;
};

module.exports = {
    allusers,
    createUser,
    userId,
};