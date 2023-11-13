const { model, Schema, Types } = require('mongoose');

const CartSchema = new Schema({
    user: { type: Types.ObjectId, ref: 'User' },
    lines: [{ type: Types.ObjectId, ref: 'Product' }],
});

const CartModel = model('Cart', CartSchema);

module.exports = { CartModel };