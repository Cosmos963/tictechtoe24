const mongoose = require("mongoose");

// Define the Notes schema
const notesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  uploadsRatingAndReview: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UploadsRatingAndReview",
    },
  ],
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// Export the Notes model
module.exports = mongoose.model("Notes", notesSchema);