const mongoose = require("mongoose");

// Define the RatingAndReview schema
const uploadsRatingAndReviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  rating: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  notes: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Notes",
    index: true,
  },
});

// Export the RatingAndReview model
module.exports = mongoose.model(
  "UploadsRatingAndReview",
  uploadsRatingAndReviewSchema
);
