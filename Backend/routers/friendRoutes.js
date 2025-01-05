const express = require("express");
const {
  sendRequest,
  acceptRequest,
  rejectRequest,
} = require("../controllers/friendController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/send-request", authMiddleware, sendRequest);
router.post("/accept-request", authMiddleware, acceptRequest);
router.post("/reject-request", authMiddleware, rejectRequest);
module.exports = router;
