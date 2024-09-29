const Note = require("../models/Notes"); // Assuming the Notes model is in ../models/Notes
const cloudinary = require("../config/cloudinary");
// Create a new note
const createNote = async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    const file = req.files.content.tempFilePath;

    if (!title || !description || !tags)
      res.status(401).json({ message: "All Fields Are Requried" });

    const image = await cloudinary.uploader.upload(file);
    console.log(image);

    // Create new note
    const newNote = new Note({
      user: req.user.id,
      title,
      description,
      tags: tags.split(","),
      content: image.secure_url,
    });

    // Save the note to the database
    const savedNote = await newNote.save();
    res
      .status(201)
      .json({ message: "Note created successfully", note: savedNote });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error creating note", error: error.message });
  }
};

// Update an existing note
const updateNotes = async (req, res) => {
  try {
    const { noteId } = req.params;
    const updateData = req.body;

    // Find the note by ID and update it
    const updatedNote = await Note.findByIdAndUpdate(noteId, updateData, {
      new: true,
    });
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res
      .status(200)
      .json({ message: "Note updated successfully", note: updatedNote });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating note", error: error.message });
  }
};

// Delete a note
const deleteNotes = async (req, res) => {
  try {
    const { noteId } = req.params;

    // Find the note by ID and delete it
    const deletedNote = await Note.findByIdAndDelete(noteId);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting note", error: error.message });
  }
};

// Get recommended notes for the user
const getRecommendedNotes = async (req, res) => {
  try {
    // Assuming you have some logic to get recommended notes for the user
    const recommendedNotes = await Note.find({ user: req.user._id }).limit(5); // Example query
    res
      .status(200)
      .json({
        message: "Recommended notes fetched successfully",
        notes: recommendedNotes,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error fetching recommended notes",
        error: error.message,
      });
  }
};

// Get all notes
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json({ message: "Notes fetched successfully", notes });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching notes", error: error.message });
  }
};

// Get details of a specific note
const getNoteDetails = async (req, res) => {
  try {
    const { noteId } = req.params;
    const note = await Note.findById(noteId).populate(
      "user category uploadsRatingAndReview tags"
    );
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res
      .status(200)
      .json({ message: "Note details fetched successfully", note });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching note details", error: error.message });
  }
};

// Get notes created by the logged-in user
const myNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    console.log(notes);

    res.status(200).json({ message: "User notes fetched successfully", notes });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user notes", error: error.message });
  }
};

// Get notes marked as favourite by the user
const getFavouriteNotes = async (req, res) => {
  try {
    // Assuming favourites is a field in the Note model indicating if the note is marked as favourite
    const favouriteNotes = await Note.find({
      user: req.user._id,
      favourite: true,
    });
    res
      .status(200)
      .json({
        message: "Favourite notes fetched successfully",
        notes: favouriteNotes,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error fetching favourite notes",
        error: error.message,
      });
  }
};

// Get notes bookmarked by the user
const getBookmarkedNotes = async (req, res) => {
  try {
    // Assuming bookmarked is a field in the Note model indicating if the note is bookmarked
    const bookmarkedNotes = await Note.find({
      user: req.user._id,
      bookmarked: true,
    });
    res
      .status(200)
      .json({
        message: "Bookmarked notes fetched successfully",
        notes: bookmarkedNotes,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error fetching bookmarked notes",
        error: error.message,
      });
  }
};

const addFavouriteNotes = async (req, res) => {
  try {
    const { postId, liked } = req.body;
    const userId = req.user._id;
    console.log(req.body);

    const likedPost = await RatingAndReview.findOne({
      user: userId,
      liked : liked,
      notes: postId,
    });
    

    if (likedPost) {
      await RatingAndReview.deleteOne({
        user: userId,
        liked : liked,
        notes: postId,
      });
      return res.json({ message: "Unliked successfully", liked: false });
    } else {
      await RatingAndReview.create({
        user: userId,
        liked : liked,
        notes: postId,
      });
      return res.json({ message: "Liked successfully", liked: true });
    }
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};
const bookmarkNote = async (req, res) => {
  try {
    const { postId, saved } = req.body;
    const userId = req.user._id;

    const savedPost = await RatingAndReview.findOne({
      user: userId,
      saved : saved,
      notes: postId,
    });

    if (savedPost) {
      await RatingAndReview.deleteOne({
        user: userId,
        saved : saved,
        notes: postId,
      });
      return res.json({ message: "Bookmark removed", saved: false });
    } else {
      await RatingAndReview.create({
        user: userId,
        saved : saved,
        notes: postId,
      });
      return res.json({ message: "Bookmarked successfully", saved: true });
    }
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err });
  }
};

module.exports = {
  getRecommendedNotes,
  getNotes,
  getFavouriteNotes,
  getBookmarkedNotes,
  getNoteDetails,
  myNotes,
  createNote,
  updateNotes,
  deleteNotes,
  addFavouriteNotes,
  bookmarkNote,
};
