const { ObjectId } = require('mongodb');
const connection = require('../connection');

const RECIPES = 'recipes';

const deleteRecipesModel = async (id) => {
  const db = await connection();
  await db.collection(RECIPES).deleteOne({ _id: ObjectId.isValid(id) });
};

module.exports = {
  deleteRecipesModel,
};