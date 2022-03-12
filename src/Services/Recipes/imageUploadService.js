const { NOT_FOUND } = require('http-status-codes').StatusCodes;
const { ObjectId } = require('mongodb');
const { imageUploadModel } = require('../../Models/Recipes/imageUploadModel');
const constructorError = require('../../Utils/constructorError');

const validId = (id) => ObjectId.isValid(id);

const imageUploadService = async (id, PathImage) => {
  if (!validId(id)) throw constructorError(NOT_FOUND, 'recipe not found');

  const image = await imageUploadModel(ObjectId(id), PathImage);

  return image;
};

module.exports = {
  imageUploadService,
};