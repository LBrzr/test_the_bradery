const {
    addToCartController,
    cartController,
    emptyCartController,
    removeFromCartController,
    changeProductCountFromCartController,
    validateCartController,
} = require("../controllers/cart");
const { isAuthenticated } = require("../middlewares");

const express = require('express');
const router = express.Router();

router.get("", isAuthenticated, cartController);
router.post("/add", isAuthenticated, addToCartController);
router.patch("/count", isAuthenticated, changeProductCountFromCartController);
router.delete("/remove/product/:prodId", isAuthenticated, removeFromCartController);
router.delete("/empty", isAuthenticated, emptyCartController);
router.post("/validate", isAuthenticated, validateCartController);

module.exports = router;
