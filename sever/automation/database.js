const { model, Schema, Types } = require('mongoose');
const fs = require('fs');
const path = require('path');

// Fonction pour lire les données depuis un fichier JSON
const readDataFromJson = (fileName) => {
    const filePath = path.join(__dirname, `${fileName}_col.json`);
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
};

// Schéma CartLine
const CartLineSchema = new Schema({
    product: { type: Types.ObjectId, ref: 'Product' },
    count: { type: Number },
});

// Schéma Cart
const CartSchema = new Schema({
    user: { type: Types.ObjectId, ref: 'User' },
    lines: [CartLineSchema],
});

// Modèle Cart
const CartModel = model('Cart', CartSchema);

// Initialisation des données pour Cart
const cartData = readDataFromJson('cart');
CartModel.insertMany(cartData);

// Répétez le même processus pour les autres schémas (Order, Product, User)...

// Schéma OrderLine
const OrderLineSchema = new Schema({
    product: { type: Types.ObjectId, ref: 'Product' },
    count: { type: Number },
    subTotal: { type: Number },
});

// Schéma Order
const OrderSchema = new Schema({
    user: { type: Types.ObjectId, ref: 'User' },
    lines: [OrderLineSchema],
    date: { type: Date, default: Date.now }
});

// Modèle Order
const OrderModel = model('Order', OrderSchema);

// Initialisation des données pour Order
const orderData = readDataFromJson('order');
OrderModel.insertMany(orderData);

// Schéma Product
const ProductSchema = new Schema({
    id: { type: Types.ObjectId },
    name: { type: String },
    image: { type: String },
    price: { type: Number },
    inventory: { type: Number },
});

// Modèle Product
const ProductModel = model('Product', ProductSchema);

// Initialisation des données pour Product
const productData = readDataFromJson('product');
ProductModel.insertMany(productData);

// Schéma User
const AuthenticationSchema = new Schema({
    password: { type: String },
    salt: { type: String },
    token: { type: String },
});

// Schéma User
const UserSchema = new Schema({
    name: { type: String },
    email: { type: String },
    authentication: { type: AuthenticationSchema },
});

// Modèle User
const UserModel = model('User', UserSchema);

// Initialisation des données pour User
const userData = readDataFromJson('user');
UserModel.insertMany(userData);
