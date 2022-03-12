const { OK } = require('http-status-codes').StatusCodes;
const { loginService } = require('../../Services/Login/loginService');

const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const verifyToken = await loginService(email, password);

    return res.status(OK).json(verifyToken);
  } catch (error) {
    console.log('post/login - loginController');
    return next(error);
  }
};

module.exports = {
  loginController,
};