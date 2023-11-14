const { model, Schema } = require('mongoose');

const AutenticationSchema = new Schema({
    password: { type: String },
    salt: { type: String },
    token: { type: String },
});

const UserSchema = new Schema({
    name: { type: String },
    email: { type: String },
    authentication: { type: AutenticationSchema },
});

const UserModel = model('User', UserSchema);

module.exports = { UserModel };