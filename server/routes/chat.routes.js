const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const chatController = require("../controller/chat.controller");

router.post("/", protect, chatController.accessChat);
router.get("/", protect, chatController.fetchChat);
router.post("/group", protect, chatController.CreateGroupChat);
router.put("/rename", protect, chatController.renameGroupName);
router.put("/addmember", protect, chatController.addToGroup);
router.put("/remove", protect, chatController.removeFromGroup);
module.exports = router;
