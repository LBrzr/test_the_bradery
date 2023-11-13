const { model, Schema, Types } = require('mongoose');

const CartLineSchema = new Schema({
    product: { type: Types.ObjectId, ref: 'Product' },
    count: { type: Number },
});

const CartSchema = new Schema({
    user: { type: Types.ObjectId, ref: 'User' },
    lines: { type: CartLineSchema },
});

const CartModel = model('Cart', CartSchema);

module.exports = { CartModel };