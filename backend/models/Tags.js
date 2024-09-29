const mongoose = require("mongoose");

// Define the Tags schema
const tagsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: { type: String, required: true },
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Notes",
    },
  ],
});

// Export the Tags model
module.exports = mongoose.model("Tags", categorySchema);
