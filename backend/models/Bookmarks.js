const mongoose = require("mongoose");

// Define the RatingAndReview schema
const bookmarksSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
	saved:{
		type:Boolean,
		default: false,
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
module.exports = mongoose.model("Bookmarks", bookmarksSchema);