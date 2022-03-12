const { CREATED } = require('http-status-codes').StatusCodes;
const { createUserService } = require('../../Services/Users/createUserService');

const createUserController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const create = await createUserService(name, email, password);

    return res.status(CREATED).json(create);
  } catch (error) {
    console.log('post/user - CreateUserController');
    return next(error);  
  }
};

module.exports = {
  createUserController,
};