const { NO_CONTENT } = require('http-status-codes').StatusCodes;
const { deleteRecipesService } = require('../../Services/Recipes/deleteRecipesService');

const deleteRecipesController = async (req, res, next) => {
try {
  const { id } = req.params;
  await deleteRecipesService(id);
  return res.status(NO_CONTENT).json();
} catch (error) {
  return next(console.error());
}
};

module.exports = {
  deleteRecipesController,
};