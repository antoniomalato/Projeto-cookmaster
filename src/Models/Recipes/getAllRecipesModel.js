const connection = require('../connection');

const RECIPES = 'recipes';

const getAllRecipesModel = async () => {
  const db = await connection();
  const resolve = await db.collection(RECIPES).find({}).toArray();
  return resolve;
};

module.exports = {
  getAllRecipesModel,
};