const { ObjectId } = require('mongodb');
const connection = require('../connection');
const { getRecipeByIdModel } = require('./getRecipeByIdModel');

const RECIPES = 'recipes';

const imageUploadModel = async (id, PathImage) => {
  const db = await connection();
  await db.collection(RECIPES).updateOne(
    {
      _id: ObjectId(id),
    },
    {
      $set: { image: PathImage },
    },
  );
  return getRecipeByIdModel(ObjectId(id));
};

module.exports = {
  imageUploadModel,
};