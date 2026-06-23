const express = require("express");
const {
  getPublicRoom,
  getPublicRooms,
} = require("../controllers/roomController");

const router = express.Router();

router.get("/", getPublicRooms);
router.get("/:id", getPublicRoom);

module.exports = router;
