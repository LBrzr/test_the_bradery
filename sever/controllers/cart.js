const { CartModel } = require('../models/cart');
const { OrderModel } = require('../models/order');

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
        var cLine;
        for (let i in cart.lines) {
            const line = cart.lines[i];
            if (line.product._id == product) {
                cLine = line;
                break;
            }
        }
        if (cLine) {
            cLine.count++;
        } else {
            cart.lines.push({ product, count: 1 });
        }
        await cart.save();
        return res.status(200).json(cart).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

const changeProductCountFromCartController = async (req, res) => {
    try {
        const { product, count } = req.body;
        const cart = await getUserCart(req.user);
        for (let i in cart.lines) {
            const line = cart.lines[i];
            if (line.product._id == product) {
                line.count = count;
                break;
            }
        }
        await cart.save();
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
        await cart.save();
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
        await cart.save();
        return res.status(200).json(cart).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

const validateCartController = async (req, res) => {
    try {
        const cart = await getUserCart(req.user);
        if (cart.lines.length > 0) {
            const order = OrderModel.create({
                user: cart.user,
                lines: cart.lines.map(line => {
                    return {
                        product: line.product,
                        count: line.count,
                        subTotal: line.product.price * line.count,
                    };
                })
            });
            cart.lines = [];
            await cart.save();
            return res.status(200).json({ cart, order }).end();
        }
        return res.status(400);
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
    validateCartController,
    changeProductCountFromCartController,
}