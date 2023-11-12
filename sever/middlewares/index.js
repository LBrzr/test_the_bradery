const { merge } = require('lodash');

const User = require('../models/user');

const isAuthenticated = async (req, res, next) => {
    try {
        const { token } = req.cookies
        console.log(token);
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const user = await User.findOne({ 'authentication.token': token });
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