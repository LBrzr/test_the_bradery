const { model, Schema, Types } = require('mongoose');

const ProductSchema = new Schema({
    id: { type: Types.ObjectId },
    name: { type: String },
    price: { type: Number },
    inventory: { type: Number },
});

const ProductModel = model('Product', ProductSchema);

module.exports = { ProductModel };