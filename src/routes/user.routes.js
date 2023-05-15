const express = require('express');
const {
    allusers,
    createUser,
    userIdController,
} = require('../controllers/user.controller');
const { userValidation, emailValidation } = require('../middlewares/user.middleware');
const { userToken } = require('../tokens/userToken');

const userRouter = express.Router();
userRouter.get('/', userToken, allusers);
userRouter.get('/:id', userToken, userIdController);
userRouter.post('/', userValidation, emailValidation, createUser);

module.exports = userRouter;