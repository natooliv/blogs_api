const models = require('../models');

const userLogin = async (email, password) => {
    const user = await models.User.findAll({
        where: { email, password },
        attributes: { exclude: ['password'] },
    });
    return user;
};
const loginValidate = async (email, password) => {
    const results = await models.User.findOne({ where: { email, password } });
    // const emailValidate = results.find((user) => user.email === email);
    // const passwordValidate = results.find((user) => user.password === password);
    // if (!emailValidate || !passwordValidate) return 'Invalid fields';
    // const user = await userLogin(email, password);
    return results;
};

module.exports = { loginValidate, userLogin };