const { ObjectId } = require('mongodb');
const { NOT_FOUND } = require('http-status-codes').StatusCodes;
const { getRecipeByIdModel } = require('../../Models/Recipes/getRecipeByIdModel');
const constructorError = require('../../Utils/constructorError');

const validId = (id) => ObjectId.isValid(id);

const getRecipesByIdService = async (id) => {
  if (!validId(id)) throw constructorError(NOT_FOUND, 'recipe not found');
  const getById = await getRecipeByIdModel(id);
  if (!getById) throw constructorError(NOT_FOUND, 'recipe not found');

  return getById;
};

module.exports = {
  getRecipesByIdService,
};