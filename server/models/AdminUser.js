const mongoose = require("mongoose");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const adminUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      match: [emailPattern, "Please provide a valid email address."],
    },
    passwordHash: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["owner", "admin"],
      default: "owner",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    lastLoginAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

adminUserSchema.index({ email: 1 }, { unique: true });
adminUserSchema.index({ isActive: 1 });

module.exports = mongoose.model("AdminUser", adminUserSchema);
