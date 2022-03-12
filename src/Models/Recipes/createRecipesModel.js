const connection = require('../connection');

const RECIPES = 'recipes';

const createRecipesModel = async (name, ingredients, preparation, userId) => {
  const db = await connection();
  const { insertedId } = await db.collection(RECIPES)
  .insertOne({ name, ingredients, preparation, userId });
  
  return { _id: insertedId };
};

module.exports = {
  createRecipesModel,
};