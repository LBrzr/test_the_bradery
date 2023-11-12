const { productListController } = require("../controllers/product");
const { isAuthenticated } = require("../middlewares");

const express = require('express');
const router = express.Router();

router.get("/list", isAuthenticated, productListController);

module.exports = router;
