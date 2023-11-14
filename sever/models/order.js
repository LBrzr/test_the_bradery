const { model, Schema, Types } = require('mongoose');

const OrderLineSchema = new Schema({
    product: { type: Types.ObjectId, ref: 'Product' },
    count: { type: Number },
    subTotal: { type: Number },
});

const OrderSchema = new Schema({
    user: { type: Types.ObjectId, ref: 'User' },
    lines: [OrderLineSchema],
    date: { type: Date, default: Date.now }
});

const OrderModel = model('Order', OrderSchema);

module.exports = { OrderModel };