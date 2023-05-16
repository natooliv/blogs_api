const { BlogPost, PostCategory } = require('../models');

const createPost = async (title, content, userId) => {
  const { dataValues } = await BlogPost.create({
    title,
    content,
    userId,
  });

  const { id } = dataValues;

  const {
    dataValues: { updated, published },
  } = await BlogPost.findOne({ where: { id } });

  const objetao = { ...dataValues, updated, published };

  return objetao;
};

const categoryPost = async (postId, categoryIds) => {
  console.log('vamos lá', categoryIds);
  const array = [];

  categoryIds.forEach((e) => array.push({ postId, id: e }));

  console.log(array);

  await Promise.all(
    array.map((e) => PostCategory.create({ postId: e.postId, categoryId: e.id })),
  );
};

module.exports = {
  createPost,
  categoryPost,
};
