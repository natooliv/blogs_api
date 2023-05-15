const loginService = require('../services/login.services');
const { createToken } = require('../tokens/tokensGenerate');

const login = async (req, res) => {
    const { email, password } = req.body;

    const result = await loginService.loginValidate(email, password);

    if (!result) {
        return res.status(400).json({ message: 'Invalid fields' });
    }
    const token = createToken(result);
    return res.status(200).json({ token });
};
module.exports = { login };