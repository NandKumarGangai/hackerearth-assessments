const _get = require('lodash/get');
const jwt = require('jsonwebtoken');
const {
    genericError,
    genericResponseSender,
    authorizationError,
    status,
} = require('../utils');
const { UserModel } = require('../database/models');

const getAllItemsController = (req, res) => {
    console.log('req: ', req.body)
    return jwt.verify(req.token, process.env.JWT_SECRET, async (err, authData) => {
        if (err) {
            return authorizationError(res, err);
        }
        const email = _get(req, 'body.email');

        if (authData.data !== email) {
            return authorizationError(res);
        }

        try {
            const filter = { email };
            const doc = await UserModel.find(filter);

            console.log('doc: ', doc);
            return genericResponseSender(res, { status: status.SUCCESS, response: _get(doc[0], 'items', []) });
        } catch (error) {
            console.log('eerror: ', error)
            return genericError(res);
        }
    });
};

module.exports = {
    getAllItemsController
}