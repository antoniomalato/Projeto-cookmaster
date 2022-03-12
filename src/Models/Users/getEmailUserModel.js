const connection = require('../connection');

const USERS = 'users';

const getEmailUserModel = async (email) => {
  const db = await connection();
  const resolve = await db.collection(USERS).findOne({ email });

  return resolve;
};

 module.exports = {
   getEmailUserModel,
 };