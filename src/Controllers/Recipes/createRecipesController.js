const { CREATED, UNAUTHORIZED } = require('http-status-codes').StatusCodes;
const { createRecipesService } = require('../../Services/Recipes/createRecipesService');
const constructorError = require('../../Utils/constructorError');

const createRecipesController = async (req, res, next) => {
  try {
    const { name, ingredients, preparation } = req.body;
    const { _id } = req;
    const userId = _id;
    const { error, recipe } = await createRecipesService(name, ingredients, preparation, userId);
    
    if (error) throw constructorError(UNAUTHORIZED, 'jwt malformed');

    return res.status(CREATED).json({ recipe });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createRecipesController,
};