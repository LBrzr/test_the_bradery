const { CartModel } = require('../models/cart');

const getUserCart = async (user) => {
    var cart = await CartModel.findOne({ user });
    if (!cart) {
        cart = CartModel.create({ user, lines: [] });
    }
    return cart;
}

const cartController = async (req, res) => {
    try {
        const cart = await getUserCart(req.user);
        return res.status(200).json(cart).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

const addToCartController = async (req, res) => {
    try {
        const { product } = req.body;
        const cart = await getUserCart(req.user);
        cart.lines.add(product);
        cart.save();
        return res.status(200).json(cart).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

const removeFromCartController = async (req, res) => {
    try {
        const product = req.params.prodId;
        const cart = await getUserCart(req.user);
        cart.lines.remove(product);
        cart.save();
        return res.status(200).json(cart).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

const emptyCartController = async (req, res) => {
    try {
        const cart = await getUserCart(req.user);
        cart.lines = [];
        cart.save();
        return res.status(200).json(cart).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

module.exports = {
    cartController,
    addToCartController,
    removeFromCartController,
    emptyCartController,
}