const { CartModel } = require('../models/cart');
const { OrderModel } = require('../models/order');
const { ProductModel } = require('../models/product');

const getUserCart = async (user) => {
    var cart = await CartModel.findOne({ user });
    if (!cart) {
        cart = CartModel.create({ user, lines: [] });
    }
    return cart;
}

const getComplete = async (cart) => {
    return {
        _id: cart._id,
        user: cart.user,
        lines: await Promise.all(cart.lines.map(async line => {
            const prod = await ProductModel.findOne({ _id: line.product });
            return {
                product: {
                    _id: prod._id,
                    name: prod.name,
                    image: prod.image,
                    price: prod.price,
                },
                count: line.count,
            };
        })),
    };
}

const cartController = async (req, res) => {
    try {
        const cart = await getUserCart(req.user);
        return res.status(200).json(await getComplete(cart)).end();
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
        return res.status(200).json(await getComplete(cart)).end();
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
        return res.status(200).json(await getComplete(cart)).end();
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
        return res.status(200).json(await getComplete(cart)).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

const validateCartController = async (req, res) => {
    try {
        const cart = await getUserCart(req.user);
        const cartData = await getComplete(cart);
        var messages = [];
        if (cartData.lines.length > 0) {
            const oLines = [];
            cartData.lines.forEach(line => {
                if (line.product.inventory <= line.count) {
                    oLines.push({
                        product: line.product._id,
                        count: line.count,
                        subTotal: line.product.price * line.count,
                    });
                    ProductModel.findOneAndUpdate({ _id: line.product._id }, { inventory: line.product.inventory - line.count });
                } else {
                    messages.push({
                        product: line.product,
                        content: "out of inventory !",
                    });
                }
            })
            const order = OrderModel.create({
                user: cart.user,
                lines: oLines,
            });
            cart.lines = [];
            await cart.save();
            return res.status(200).json({ cart: await getComplete(cart), order, messages }).end();
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