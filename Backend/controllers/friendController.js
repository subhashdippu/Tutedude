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
const acceptRequest = async (req, res) => {
  try {
    const { requestId } = req.body;
    const friendRequest = await Friend.findById(requestId);

    if (!friendRequest || friendRequest.recipient.toString() !== req.user.id) {
      return res.status(404).json({ message: "Friend request not found" });
    }

    friendRequest.status = "accepted";
    await friendRequest.save();
    res.status(200).json({ message: "Friend request accepted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const rejectRequest = async (req, res) => {
  try {
    const { requestId } = req.body;
    const friendRequest = await Friend.findById(requestId);

    if (!friendRequest || friendRequest.recipient.toString() !== req.user.id) {
      return res.status(404).json({ message: "Friend request not found" });
    }

    friendRequest.status = "rejected";
    await friendRequest.save();
    res.status(200).json({ message: "Friend request rejected" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const showAllFriends = async (req, res) => {
  try {
    const friends = await Friend.find({
      $or: [
        { requester: req.user.id, status: "accepted" },
        { recipient: req.user.id, status: "accepted" },
      ],
    }).populate("requester recipient", "username");

    const friendList = friends.map((friend) => {
      if (friend.requester._id.toString() === req.user.id) {
        return friend.recipient;
      } else {
        return friend.requester;
      }
    });

    res.status(200).json(friendList);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getMutualFriends = async (req, res) => {
  try {
    const userId = req.user.id;
    const userFriends = await Friend.find({
      $or: [
        { requester: userId, status: "accepted" },
        { recipient: userId, status: "accepted" },
      ],
    });

    const friendIds = userFriends.map((friend) =>
      friend.requester.toString() === userId
        ? friend.recipient
        : friend.requester
    );

    const mutualFriends = await Friend.find({
      $or: [
        { requester: { $in: friendIds }, status: "accepted" },
        { recipient: { $in: friendIds }, status: "accepted" },
      ],
      $and: [{ requester: { $ne: userId } }, { recipient: { $ne: userId } }],
    });

    const mutualFriendIds = mutualFriends.map((friend) =>
      friend.requester.toString() === userId
        ? friend.recipient
        : friend.requester
    );
    const suggestedFriends = await User.find({
      _id: { $in: mutualFriendIds, $nin: friendIds },
    }).select("-password");

    res.json(suggestedFriends);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  sendRequest,
  acceptRequest,
  rejectRequest,
  showAllFriends,
  getMutualFriends,
};
