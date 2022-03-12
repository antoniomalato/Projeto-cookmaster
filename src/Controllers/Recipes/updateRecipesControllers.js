const { OK } = require('http-status-codes').StatusCodes;
const { updateRecipesService } = require('../../Services/Recipes/updateRecipesService');

const updateRecipesController = async (req, res, next) => {
try {
  const { name, ingredients, preparation } = req.body;
  const { id } = req.params;
  const update = await updateRecipesService(id, name, ingredients, preparation);

  return res.status(OK).json(update);
} catch (error) {
  return next();
}
};

module.exports = {
  updateRecipesController,
};