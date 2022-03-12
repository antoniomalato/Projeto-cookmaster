const { getAllRecipesModel } = require('../../Models/Recipes/getAllRecipesModel');

const getAllRecipesService = async () => {
  const getAll = getAllRecipesModel();
  return getAll;
};

module.exports = {
  getAllRecipesService,
};