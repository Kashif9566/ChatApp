const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const messageController = require("../controller/message.controller");

router.post("/", protect, messageController.sendMessage);
router.get("/:chatId", protect, messageController.allMessages);

module.exports = router;
