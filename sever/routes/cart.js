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
router.get("/add", isAuthenticated, addToCartController);
router.get("/remove", isAuthenticated, removeFromCartController);
router.get("/empty", isAuthenticated, emptyCartController);

module.exports = router;
