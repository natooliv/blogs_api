const { Category } = require('../models');

const createCategory = async (name) => Category.create({ name });

const allCategory = () => Category.findAll();

module.exports = {
    createCategory,
    allCategory,
};