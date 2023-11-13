const {
    addToCartController,
    cartController,
    emptyCartController,
    removeFromCartController,
} = require("../controllers/cart");
const { isAuthenticated } = require("../middlewares");

const express = require('express');
const router = express.Router();

router.get("", isAuthenticated, cartController);
router.post("/add", isAuthenticated, addToCartController);
router.delete("/remove/product/:prodId", isAuthenticated, removeFromCartController);
router.delete("/empty", isAuthenticated, emptyCartController);

module.exports = router;
