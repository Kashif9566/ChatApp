const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const { protect } = require("../middleware/authMiddleware");

router.post("/register", userController.registerUser);
router.post("/login", userController.login);
router.get("/", protect, userController.allUsers);
module.exports = router;
