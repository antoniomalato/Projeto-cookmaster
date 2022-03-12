const { OK } = require('http-status-codes').StatusCodes;
const { getAllRecipesService } = require('../../Services/Recipes/getAllRecipesService');

const getAllRecipesController = async (req, res, next) => {
  try {
    const getAll = await getAllRecipesService();
    return res.status(OK).json(getAll);
  } catch (error) {
    return next();
  }
};

module.exports = {
  getAllRecipesController,
};