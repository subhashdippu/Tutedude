const express = require("express");
const {
  sendRequest,
  acceptRequest,
  rejectRequest,
  showAllFriends,
} = require("../controllers/friendController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/send-request", authMiddleware, sendRequest);
router.post("/accept-request", authMiddleware, acceptRequest);
router.post("/reject-request", authMiddleware, rejectRequest);
router.get("/all-friends", authMiddleware, showAllFriends);
module.exports = router;
