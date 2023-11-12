const { merge } = require('lodash');

const { UserModel } = require('../models/user');

const isAuthenticated = async (req, res, next) => {
    try {
        const [type, token] = req.headers.authorization.split(' ');
        console.log(token);
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const user = await UserModel.findOne({ 'authentication.token': token });
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        merge(req, { user });
        return next();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}


module.exports = { isAuthenticated };