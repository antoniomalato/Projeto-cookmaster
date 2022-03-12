const { OK } = require('http-status-codes').StatusCodes;
const { getRecipesByIdService } = require('../../Services/Recipes/getRecipeByIdService');

const getRecipeByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getById = await getRecipesByIdService(id);
    
    return res.status(OK).json(getById);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getRecipeByIdController,
};