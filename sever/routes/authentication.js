const { registerController, loginController, meController } = require("../controllers/authentication");
const { isAuthenticated } = require("../middlewares");

const express = require('express');
const router = express.Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.get("/me", isAuthenticated, meController);

module.exports = router;
