// const Joi = require('joi');
const { BAD_REQUEST, CONFLICT } = require('http-status-codes').StatusCodes;
const { getEmailUserModel } = require('../../Models/Users/getEmailUserModel');
const { createUserModel } = require('../../Models/Users/createUserModel');
const { schemaUser } = require('../../Utils/validadeUsers');
const constructorError = require('../../Utils/constructorError');

const createUserService = async (name, email, password, role) => {
  const { error } = schemaUser.validate({ name, email, password, role });
  const getEmail = await getEmailUserModel(email);
  if (getEmail) throw constructorError(CONFLICT, 'Email already registered');
  if (error) throw constructorError(BAD_REQUEST, 'Invalid entries. Try again.');
  
  const { _id } = await createUserModel(name, email, password);
  return { user: {
    _id,
    name,
    email,
    role: 'user',
  } };
};

module.exports = {
  createUserService,
};