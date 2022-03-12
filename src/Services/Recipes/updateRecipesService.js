const { ObjectId } = require('mongodb');
const { NOT_FOUND, BAD_REQUEST } = require('http-status-codes').StatusCodes;
const { getRecipeByIdModel } = require('../../Models/Recipes/getRecipeByIdModel');
const { updateRecipesModel } = require('../../Models/Recipes/updateRecipesModel');
const constructorError = require('../../Utils/constructorError');
const { schemaRecipes } = require('../../Utils/validadeUsers');

const validId = (id) => ObjectId.isValid(id);

const updateRecipesService = async (id, name, ingredients, preparation) => {
  validId(id);
  const { error } = schemaRecipes.validate({ name, ingredients, preparation });
  if (error) throw constructorError(BAD_REQUEST, 'Invalid entries. Try again.');
  const getIdRecipe = await getRecipeByIdModel(id);
    
  if (!getIdRecipe) throw constructorError(NOT_FOUND, 'recipe not found');
  const update = await updateRecipesModel(id, name, ingredients, preparation);

  return update; 
};

module.exports = {
  updateRecipesService,
};
