// Import the required modules
const express = require("express");
const router = express.Router();

// Import the Controllers

// Course Controllers Import
const {
  createCourse,
  getAllCourses,
  getCourseDetails,
  getFullCourseDetails,
  editCourse,
  getInstructorCourses,
  deleteCourse,
} = require("../controllers/Course");

// Categories Controllers Import
const {
  showAllCategories,
  createCategory,
  categoryPageDetails,
} = require("../controllers/Category");

// Sections Controllers Import
const {
  createSection,
  updateSection,
  deleteSection,
} = require("../controllers/Section");

// Sub-Sections Controllers Import
const {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} = require("../controllers/Subsection");

// Rating Controllers Import
const {
  createRating,
  getAverageRating,
  getAllRating,
} = require("../controllers/RatingAndReview");

const { updateCourseProgress } = require("../controllers/courseProgress");

// Importing Middlewares
const { auth } = require("../middlewares/auth");

// ********************************************************************************************************
//                                      Course routes
// ********************************************************************************************************

// Courses can Only be Created by Instructors
router.post("/createCourse", auth, createCourse);
//Add a Section to a Course
router.post("/addSection", auth, createSection);
// Update a Section
router.post("/updateSection", auth, updateSection);
// Delete a Section
router.post("/deleteSection", auth, deleteSection);
// Edit Sub Section
router.post("/updateSubSection", auth, updateSubSection);
// Delete Sub Section
router.post("/deleteSubSection", auth, deleteSubSection);
// Add a Sub Section to a Section
router.post("/addSubSection", auth, createSubSection);
// Get all Registered Courses
router.get("/getAllCourses", getAllCourses);
// Get Details for a Specific Courses
router.post("/getCourseDetails", getCourseDetails);
// Get Details for a Specific Courses
router.post("/getFullCourseDetails", auth, getFullCourseDetails);
// Edit Course routes
router.post("/editCourse", auth, editCourse);
// Get all Courses Under a Specific Instructor
router.get("/getInstructorCourses", auth, getInstructorCourses);
// Delete a Course
router.delete("/deleteCourse", deleteCourse);

router.post("/updateCourseProgress", auth, updateCourseProgress);

// ********************************************************************************************************
//                                      Category routes (Only by Admin)
// ********************************************************************************************************
// Category can Only be Created by Admin
// TODO: Put IsAdmin Middleware here
router.post("/createCategory", auth, createCategory);
router.get("/showAllCategories", showAllCategories);
router.post("/getCategoryPageDetails", categoryPageDetails);

// ********************************************************************************************************
//                                      Rating and Review
// ********************************************************************************************************
router.post("/createRating", auth, createRating);
router.get("/getAverageRating", getAverageRating);
router.get("/getReviews", getAllRating);

module.exports = router;
