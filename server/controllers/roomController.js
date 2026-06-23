const mongoose = require("mongoose");
const Room = require("../models/Room");

const getPublicRooms = async (req, res) => {
  try {
    const rooms = await Room.find({ isActive: true })
      .sort({ unitType: 1, nightlyPrice: 1, name: 1 })
      .lean();

    res.json({ rooms });
  } catch (error) {
    res.status(500).json({ message: "Failed to load rooms." });
  }
};

const getPublicRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const query = mongoose.Types.ObjectId.isValid(id)
      ? { _id: id, isActive: true }
      : { slug: id, isActive: true };

    const room = await Room.findOne(query).lean();

    if (!room) {
      return res.status(404).json({ message: "Room not found." });
    }

    res.json({ room });
  } catch (error) {
    res.status(500).json({ message: "Failed to load room." });
  }
};

module.exports = {
  getPublicRooms,
  getPublicRoom,
};
