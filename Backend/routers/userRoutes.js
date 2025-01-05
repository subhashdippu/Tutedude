const express = require("express");
const {
  getUserProfile,
  searchUsers,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/profile", authMiddleware, getUserProfile);
router.get("/search", authMiddleware, searchUsers);
module.exports = router;
