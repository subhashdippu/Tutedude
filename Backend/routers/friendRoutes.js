const express = require("express");
const { sendRequest } = require("../controllers/friendController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/send-request", authMiddleware, sendRequest);

module.exports = router;
