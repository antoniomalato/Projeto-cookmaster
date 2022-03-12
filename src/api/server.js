const express = require('express');
const multer = require('multer');

const path = require('path');

const app = require('./app');
const error = require('../Middlewares/ErrorDefault');

const { createUserController } = require('../Controllers/Users/createUserController');
const { loginController } = require('../Controllers/Login/loginController');
const { createRecipesController } = require('../Controllers/Recipes/createRecipesController');
const { authValidate } = require('../Services/authService');
const { getRecipeByIdController } = require('../Controllers/Recipes/getRecipeByIdController');
const { deleteRecipesController } = require('../Controllers/Recipes/deleteRecipesController');
const { getAllRecipesController } = require('../Controllers/Recipes/getAllRecipesController');
const { updateRecipesController } = require('../Controllers/Recipes/updateRecipesControllers');
const { imageUploadController } = require('../Controllers/Recipes/imageUploadController');

const PORT = 3000;

app.use(express.json());

app.use('/images', express.static(path.join(__dirname, '..', '/uploads')));

const storage = multer.diskStorage({
  destination: path.join(__dirname, '..', '/uploads'),
  filename: (req, _file, callback) => {
    callback(null, `${req.params.id}.jpeg`);
  },
});

const upload = multer({ storage });

app.put('/recipes/:id/image', authValidate, upload.single('image'), imageUploadController);

app.post('/users', createUserController);
app.post('/login', loginController);
app.post('/recipes', authValidate, createRecipesController);

app.get('/recipes', getAllRecipesController);
app.get('/recipes', authValidate, getAllRecipesController);

app.get('/recipes/:id', getRecipeByIdController);
app.get('/recipes/:id', authValidate, getRecipeByIdController);

app.put('/recipes/:id', authValidate, updateRecipesController);

app.delete('/recipes/:id', authValidate, deleteRecipesController);

app.use(error);
app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
