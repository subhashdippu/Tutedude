const User = require("../models/User");
const Friend = require("../models/Friend");

const sendRequest = async (req, res) => {
  try {
    const { recipientId } = req.body;
    const recipient = await User.findById(recipientId);

    if (!recipient) {
      return res.status(404).json({ message: "Recipient not found" });
    }

    const existingRequest = await Friend.findOne({
      requester: req.user.id,
      recipient: recipient._id,
    });

    if (existingRequest) {
      return res.status(400).json({ message: "Friend request already sent" });
    }

    const friendRequest = new Friend({
      requester: req.user.id,
      recipient: recipient._id,
    });
    await friendRequest.save();
    res.status(201).json({ message: "Friend request sent" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  sendRequest,
};
