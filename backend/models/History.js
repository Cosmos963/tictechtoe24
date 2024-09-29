const mongoose = require("mongoose");

// Define the RatingAndReview schema
const historySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  search: [
    {
      type: String,
      required: true,
    },
  ],
  course:[
    {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Course",
    }
  ]
});

// Export the RatingAndReview model
module.exports = mongoose.model("History", historySchema);
