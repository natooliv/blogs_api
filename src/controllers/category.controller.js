const categoryServices = require('../services/category.services');

const createCategory = async (req, res) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }
    const categoriesCategory = await categoryServices.createCategory(name);
    res.status(201).json(categoriesCategory);
};

const allCategory = async (_req, res) => {
    const categories = await categoryServices.allCategory();
    res.status(200).json(categories);
};
module.exports = {
    createCategory,
    allCategory,
};