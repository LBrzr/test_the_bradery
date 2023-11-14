const { ProductModel } = require('../models/product');

const productListController = async (req, res) => {
    try {
        const products = await ProductModel.find({});
        return res.status(200).json(products).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

module.exports = { productListController }