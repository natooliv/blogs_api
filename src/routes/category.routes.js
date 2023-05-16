const express = require('express');
const { createCategory, allCategory } = require('../controllers/category.controller');
const validateJwt = require('../middlewares/token.middlewares');

const categoryRouter = express.Router();
categoryRouter.get('/', validateJwt, allCategory);
categoryRouter.post('/', validateJwt, createCategory);

module.exports = categoryRouter;