const mongoose = require("mongoose");
const { UNIT_TYPES } = require("./modelConstants");

const imageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
      trim: true,
    },
    alt: {
      type: String,
      default: "",
      trim: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { _id: false }
);

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    unitType: {
      type: String,
      enum: UNIT_TYPES,
      default: "room",
    },
    availabilityGroup: {
      type: String,
      default: "main-villa",
      trim: true,
    },
    shortDescription: {
      type: String,
      default: "",
      trim: true,
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
    nightlyPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    maxGuests: {
      type: Number,
      required: true,
      min: 1,
    },
    bedrooms: {
      type: Number,
      default: 0,
      min: 0,
    },
    bathrooms: {
      type: Number,
      default: 0,
      min: 0,
    },
    sizeLabel: {
      type: String,
      default: "",
      trim: true,
    },
    amenities: {
      type: [String],
      default: [],
    },
    images: {
      type: [imageSchema],
      default: [],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

roomSchema.index({ slug: 1 }, { unique: true });
roomSchema.index({ isActive: 1 });
roomSchema.index({ unitType: 1 });
roomSchema.index({ availabilityGroup: 1, unitType: 1, isActive: 1 });

module.exports = mongoose.model("Room", roomSchema);
