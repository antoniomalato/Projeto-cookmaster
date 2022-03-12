const { StatusCodes } = require('http-status-codes');

module.exports = (err, _req, res, _next) => {
  if (err.status) {
    const { status, message } = err;
    console.log(message);
    return res.status(status).json({ message });
  }
  console.error(err);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error!' });
};