const { ObjectId } = require('mongodb');
const connection = require('../connection');

const RECIPES = 'recipes';

const getRecipeByIdModel = async (id) => {
  const db = await connection();
  const resolve = await db.collection(RECIPES).findOne({ _id: ObjectId(id) });
  return resolve;
};

module.exports = {
  getRecipeByIdModel,
};