const mongoose = require("mongoose");
const { CONTENT_SECTIONS } = require("./modelConstants");

const contentItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
      trim: true,
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
    image: {
      url: {
        type: String,
        default: "",
        trim: true,
      },
      alt: {
        type: String,
        default: "",
        trim: true,
      },
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed,
      default: () => ({}),
    },
    sortOrder: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { _id: false }
);

const websiteContentSchema = new mongoose.Schema(
  {
    section: {
      type: String,
      required: true,
      enum: CONTENT_SECTIONS,
    },
    title: {
      type: String,
      default: "",
      trim: true,
    },
    subtitle: {
      type: String,
      default: "",
      trim: true,
    },
    body: {
      type: String,
      default: "",
      trim: true,
    },
    items: {
      type: [contentItemSchema],
      default: [],
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed,
      default: () => ({}),
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

websiteContentSchema.index({ section: 1 }, { unique: true });
websiteContentSchema.index({ isActive: 1 });

module.exports = mongoose.model("WebsiteContent", websiteContentSchema);
