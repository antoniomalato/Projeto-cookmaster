const { BAD_REQUEST } = require('http-status-codes').StatusCodes;
const { ObjectId } = require('mongodb');
const { deleteRecipesModel } = require('../../Models/Recipes/deleteRecipesModel');
const { getRecipeByIdModel } = require('../../Models/Recipes/getRecipeByIdModel');
const constructorError = require('../../Utils/constructorError');

const validId = (id) => ObjectId.isValid(id);

const deleteRecipesService = async (id, role, userId) => {
  validId(id);
  const getId = await getRecipeByIdModel(id);
  if (!getId) throw constructorError(BAD_REQUEST, 'Invalid entries. Try again.');
  if (role !== 'admin' || userId !== getId.userId) { await deleteRecipesModel(id); } 
};

module.exports = {
  deleteRecipesService,
};