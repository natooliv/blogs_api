const servicePost = require('../services/post.services');
const serviceLogin = require('../services/login.services');

const post = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { data } = req.payload;
   console.log('oidanada', data); 

  const user = await serviceLogin.userEmail(data.email);
  console.log('oidanada', user);
  
  const createdPost = await servicePost.createPost(title, content, data.id);
  await servicePost.categoryPost(createdPost.id, categoryIds);
  
  res.status(201).json(createdPost);
};

module.exports = {
  post,
};
