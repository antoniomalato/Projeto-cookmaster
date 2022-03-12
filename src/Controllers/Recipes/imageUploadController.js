const { OK } = require('http-status-codes').StatusCodes;
const { imageUploadService } = require('../../Services/Recipes/imageUploadService');

const imageUploadController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { filename } = req.file;
    const pathImage = `localhost:3000/src/uploads/${filename}`;
    console.log(req);
    
    const image = await imageUploadService(id, pathImage);
    return res.status(OK).json(image);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  imageUploadController,
};