const { ObjectId } = require('mongodb');
const connection = require('../connection');
const { getRecipeByIdModel } = require('./getRecipeByIdModel');

const RECIPES = 'recipes';

const updateRecipesModel = async (id, name, ingredients, preparation) => {
  const db = await connection();
  await db.collection(RECIPES).updateOne(
    {
       _id: ObjectId(id), 
    },
    {
      $set: { name, ingredients, preparation },
    },
  );

  return getRecipeByIdModel(ObjectId(id));
};

module.exports = {
  updateRecipesModel,
};