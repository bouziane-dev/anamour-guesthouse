const mongoose = require("mongoose");

const blockedDateSchema = new mongoose.Schema(
  {
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
      validate: {
        validator(value) {
          return !this.startDate || value > this.startDate;
        },
        message: "End date must be after start date.",
      },
    },
    reason: {
      type: String,
      default: "",
      trim: true,
    },
    adminNotes: {
      type: String,
      default: "",
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

blockedDateSchema.index({ room: 1, startDate: 1, endDate: 1 });
blockedDateSchema.index({ isActive: 1 });

module.exports = mongoose.model("BlockedDate", blockedDateSchema);
