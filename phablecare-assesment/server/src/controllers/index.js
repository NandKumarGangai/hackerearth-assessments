const { signUpController } = require('./signUpController');
const { loginController } = require('./loginController');
const { calculateTDEEController } = require('./calculateTDEEController');
const { saveItemsController } = require('./saveItemsController');
const { getAllItemsController } = require('./getAllItemsController')

module.exports = {
    signUpController,
    loginController,
    calculateTDEEController,
    saveItemsController,
    getAllItemsController
}