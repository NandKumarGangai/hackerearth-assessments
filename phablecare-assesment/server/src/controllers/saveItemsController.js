const _get = require('lodash/get');
const jwt = require('jsonwebtoken');
const {
    genericError,
    genericResponseSender,
    authorizationError,
    status,
} = require('../utils');
const { UserModel } = require('../database/models');

const saveItemsController = (req, res) => {
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
            const update = { items: _get(req, 'body.items', []) };

            let doc = await UserModel.findOneAndUpdate(filter, update, { new: true });
            return genericResponseSender(res, { status: status.SUCCESS, response: {} });
        } catch (error) {
            console.log('eerror: ', error)
            return genericError(res);
        }
    });
};

module.exports = {
    saveItemsController
}