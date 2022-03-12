const { UNAUTHORIZED } = require('http-status-codes').StatusCodes;
const jwt = require('jsonwebtoken');
const constructorError = require('../Utils/constructorError');

const API_SECRET = '0123456789#';

const JWT_CONFIG = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const getToken = (user) => jwt.sign({ user }, API_SECRET, JWT_CONFIG); 

const validateToken = (user) => {
  console.log('USer');
  const { password: _password, useWithouTPassword } = user;
  console.log('validate lint', _password);
  const token = getToken(useWithouTPassword);
  return token;
};

const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, API_SECRET);
    return payload;
  } catch (error) {
    console.error(error);
  }
};
// validação feita com ajuda do codigo do Vitor Ferreira
const authValidate = async (req, _res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) throw constructorError(UNAUTHORIZED, 'missing auth token');
    const payload = verifyToken(authorization);
    if (!payload) throw constructorError(UNAUTHORIZED, 'jwt malformed');

    const { email, role, _id } = payload;
    req.userId = email;
    req.userRole = role;
    req.userId = _id;

      next();
    } catch (error) {
      next(error);
    }
};

module.exports = {
  getToken,
  validateToken,
  authValidate,
};