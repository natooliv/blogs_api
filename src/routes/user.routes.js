const express = require('express');
const { allusers, userIdController, createUser } = require('../controllers/user.controller');
 const { emailValidation, userValidation } = require('../middlewares/user.middleware');
const validateJwt = require('../middlewares/token.middlewares');

const userRouter = express.Router();

userRouter.get('/', validateJwt, allusers);
 userRouter.get('/:id', validateJwt, userIdController);
 userRouter.post('/', emailValidation, userValidation, createUser);

module.exports = { userRouter };
