const _get = require('lodash/get');
const jwt = require('jsonwebtoken');
const {
    genericError,
    genericResponseSender,
    authorizationError,
    status,
    calculateBMR,
    calculateTDEE,
    activityLevelMap
} = require('../utils');

const calculateTDEEController = (req, res) => {
    console.log('req: ', req.body)
    return jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
        if (err) {
            return authorizationError(res, err);
        }
        const email = _get(req, 'body.email');
        
        if (authData.data !== email) {
            return authorizationError(res);
        }
        
        const {
            weight,
            bodyfat,
            'activity-levels': activityLevel
        } = _get(req, 'body', {});

        try {
            const bmrValue = calculateBMR(Number(weight), Number((Number(bodyfat) * 0.01).toFixed(2)));
            const calculatedTDEE = calculateTDEE(bmrValue, activityLevelMap[activityLevel].value);

            const responseData = {
                tdee: calculatedTDEE,
                bmr: bmrValue
            };

            return genericResponseSender(res, { status: status.SUCCESS, response: responseData });
        } catch (error) {
            console.log('eerror: ', error)
            return genericError(res);
        }
    });
};

module.exports = {
    calculateTDEEController
}