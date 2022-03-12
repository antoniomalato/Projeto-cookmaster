const connection = require('../connection');

const USERS = 'users';

const createUserModel = async (name, email, password, role) => {
  const db = await connection();
  const { insertedId } = await db.collection(USERS).insertOne({ name, email, password, role });

  return { user: {
    _id: insertedId,
    name, 
    email,
    password,
    role: 'user',
  } };
};

module.exports = {
  createUserModel,
};