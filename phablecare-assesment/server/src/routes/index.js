const axios = require('axios');
const express = require('express');
const Router = express.Router();
const { interceptRequest } = require('../middlewares');
const {
    signUpController,
    loginController,
    calculateTDEEController,
    saveItemsController,
    getAllItemsController
} = require('../controllers');


Router.post('/signup', signUpController);

Router.post('/login', loginController);

Router.post('/calculate-tdee', interceptRequest, calculateTDEEController);

Router.post('/save-items', interceptRequest, saveItemsController);

Router.post('/get-all-items', interceptRequest, getAllItemsController);

module.exports = Router;