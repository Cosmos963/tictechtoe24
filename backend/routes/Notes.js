const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth");
const {
    getRecommendedNotes,
    getNotes,
    getFavouriteNotes, // Adding the new controller functions
    getBookmarkedNotes, // Adding the new controller functions
    getNoteDetails,
    myNotes,
    createNote,
    updateNotes,
    deleteNotes,
} = require("../controllers/Notes");

router.post("/createNote", auth, createNote);
router.post("/updateNotes/:noteId", auth, updateNotes);
router.delete("/deleteNotes/:noteId", auth, deleteNotes);
router.get("/getRecommendedNotes", auth, getRecommendedNotes);
router.get("/getMyNotes", auth, myNotes);
router.get("/getNotes", auth, getNotes);
router.get("/getNoteDetails/:noteId", auth, getNoteDetails);
router.get("/getFavouriteNotes", auth, getFavouriteNotes);
router.get("/getBookmarkedNotes", auth, getBookmarkedNotes);

module.exports = router;
