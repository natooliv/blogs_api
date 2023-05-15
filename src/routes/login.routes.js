const express = require('express');
const { login } = require('../controllers/login.controller');
const { validation } = require('../middlewares/loginValidation.middleware');

const routerLogin = express.Router();
routerLogin.post('/', validation, login);
 module.exports = routerLogin;