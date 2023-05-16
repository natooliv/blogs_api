const { Category } = require('../models');

const validation = async (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    const vetor = [];
    vetor.push(title, content, categoryIds);
    const result = vetor.every((e) => e !== undefined || e);
    if (!result) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const verificando = vetor.every((e) => e.length !== 0);
    if (!(verificando)) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    return next();
};

const getId = async (req, res, next) => {
    const { categoryIds } = req.body;
    const response = await Category.findAll({ attributes: { exclude: ['name'] } });
    const categoriesAll = response.map((category) => category.dataValues.id);
    const resultCategories = categoryIds.every((category) => categoriesAll.includes(category));
    if (!resultCategories) {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
    return next();
  };
module.exports = {
    validation,
    getId,
};