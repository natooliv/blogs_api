const express = require('express');
const postController = require('../controllers/post.controller');
 const { validation, getId } = require('../middlewares/postValidation.middlerawe');
const validateJwt = require('../middlewares/token.middlewares');

const postRouter = express.Router();
postRouter.post('/', validateJwt, validation, getId, postController.post);

module.exports = postRouter;
