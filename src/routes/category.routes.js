const express = require('express');
const { createCategory } = require('../controllers/category.controller');
const validateJwt = require('../middlewares/token.middlewares');

const categoryRouter = express.Router();
categoryRouter.post('/', validateJwt, createCategory);

module.exports = categoryRouter;