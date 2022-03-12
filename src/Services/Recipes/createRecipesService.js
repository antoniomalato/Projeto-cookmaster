const { BAD_REQUEST } = require('http-status-codes').StatusCodes;
const { createRecipesModel } = require('../../Models/Recipes/createRecipesModel');
const constructorError = require('../../Utils/constructorError');
const { schemaRecipes } = require('../../Utils/validadeUsers');

const createRecipesService = async (name, ingredients, preparation, userId) => {
  const { error } = schemaRecipes.validate({ name, ingredients, preparation });
  if (error) throw constructorError(BAD_REQUEST, 'Invalid entries. Try again.');

  const { _id } = await createRecipesModel(name, ingredients, preparation, userId);
  return { recipe: {
    name,
    ingredients,
    preparation,
    userId,
    _id,
  } }; 
};

module.exports = {
  createRecipesService,
};