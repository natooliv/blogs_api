const userServices = require('../services/user.services');
const { userIdToken } = require('../tokens/userToken');
const { createToken } = require('../tokens/tokensGenerate');
const { User } = require('../models');

const allusers = async (_req, res) => {
    const users = await userServices.allusers();
    if (!users) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
    return res.status(200).json(users);
};

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const userVerify = await User.findOne({ where: { email } });
    
    if (userVerify) return res.status(409).json({ message: 'User already registered' });
    const user = await userServices.createUser(displayName, email, password, image);
    const token = createToken(email);
    if (user) {
        return res.status(201).json({ token });
    }
};

const userIdController = async (req, res) => {
    const { id } = req.params;
    const user = await userIdToken(id);
    if (!user) {
        return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(user);
};

module.exports = {
    allusers,
    createUser,
    userIdController,
};