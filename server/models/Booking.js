const mongoose = require("mongoose");
const { BOOKING_STATUSES } = require("./modelConstants");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const guestSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
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
  },
  { _id: false }
);

const bookingSchema = new mongoose.Schema(
  {
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    checkIn: {
      type: Date,
      required: true,
    },
    checkOut: {
      type: Date,
      required: true,
      validate: {
        validator(value) {
          return !this.checkIn || value > this.checkIn;
        },
        message: "Check-out date must be after check-in date.",
      },
    },
    guests: {
      type: Number,
      required: true,
      min: 1,
    },
    numberOfNights: {
      type: Number,
      required: true,
      min: 1,
    },
    nightlyPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    guest: {
      type: guestSchema,
      required: true,
    },
    specialRequests: {
      type: String,
      default: "",
      trim: true,
    },
    status: {
      type: String,
      enum: BOOKING_STATUSES,
      default: "pending",
    },
    adminNotes: {
      type: String,
      default: "",
      trim: true,
    },
    confirmedAt: {
      type: Date,
      default: null,
    },
    cancelledAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

// Future overlap rule: existing.checkIn < selectedCheckOut && existing.checkOut > selectedCheckIn
bookingSchema.index({ room: 1, checkIn: 1, checkOut: 1 });
bookingSchema.index({ status: 1 });
bookingSchema.index({ room: 1, status: 1 });
bookingSchema.index({ createdAt: -1 });

module.exports = mongoose.model("Booking", bookingSchema);
