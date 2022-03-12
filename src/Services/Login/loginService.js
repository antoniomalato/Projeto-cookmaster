const { UNAUTHORIZED } = require('http-status-codes').StatusCodes;
const { getEmailUserModel } = require('../../Models/Users/getEmailUserModel');
const { schemaLogin } = require('../../Utils/validadeUsers');
const constructorError = require('../../Utils/constructorError');
const { validateToken } = require('../authService');

const errPass = constructorError(UNAUTHORIZED, 'All fields must be filled');

const valid = (email, password) => {
  if (!email || !password) { return true; }
};

const loginService = async (email, password) => {
  if (valid(email, password)) throw errPass;
  
  const { error } = schemaLogin.validate({ email, password });
  if (error) throw constructorError(UNAUTHORIZED, 'Incorrect username or password');  
  
  const getEmail = await getEmailUserModel(email);
  if (!getEmail || password !== getEmail.password) {
    throw constructorError(UNAUTHORIZED, 'Incorrect username or password');
  } 

  // const { password: _password, useWithoutPassword } = getEmail;
  
  const token = validateToken(getEmail);
  return { token };
};

module.exports = {
  loginService,
};