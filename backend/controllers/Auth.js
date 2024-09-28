const bcrypt = require("bcryptjs");
const User = require("../models/User");
const OTP = require("../models/OTP");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const mailSender = require("../utils/mailSender");
const { passwordUpdated } = require("../mail/templates/passwordUpdate");
const Profile = require("../models/Profile");
require("dotenv").config();


exports.signup = async (req, res) => {
  try {
<<<<<<< HEAD
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      contactNumber,
      otp,
    } = req.body;
    console.log(req.body);
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !otp
    ) {
=======
    const { firstName, lastName, email, password, confirmPassword, contactNumber, otp, } = req.body
    if (!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
>>>>>>> a73f0d55b4253365a9ad58b1ea748320ae5daa4c
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message:
          "Password and Confirm Password do not match. Please try again.",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser != null) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please sign in to continue.",
      });
    }

<<<<<<< HEAD
    // Find the most recent OTP for the email
    const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
    console.log(response);
=======
    const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
>>>>>>> a73f0d55b4253365a9ad58b1ea748320ae5daa4c
    if (response.length === 0) {
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    } else if (otp !== response[0].otp) {
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the Additional Profile For User
<<<<<<< HEAD
    const profileDetails = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      contactNumber: null,
      interests: [],
    });
=======
    const profileDetails = await Profile.create(
      {
        gender: null,
        dateOfBirth: null,
        about: null,
        contactNumber: contactNumber,
        interests: [],
      }
    );
>>>>>>> a73f0d55b4253365a9ad58b1ea748320ae5daa4c

    const user = await User.create({
      firstName,
      lastName,
      email,
      contactNumber,
      password: hashedPassword,
      additionalDetails: profileDetails._id,
      image: "",
      enrolledCourses: [],
      notes: [],
      courseProgress: null,
      token: null,
      resetPasswordExpires: null,
      favourites: [],
      bookmarks: [],
    });

    return res.status(200).json({
      success: true,
      user,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: `Please Fill up All the Required Fields`,
      });
    }

<<<<<<< HEAD
    // Find user with provided email
    const user = await User.findOne({ email }).populate("additionalDetails");
=======
    const user = await User.findOne({ email }).populate("additionalDetails")
>>>>>>> a73f0d55b4253365a9ad58b1ea748320ae5daa4c

    if (!user) {
      return res.status(401).json({
        success: false,
        message: `User is not Registered with Us Please SignUp to Continue`,
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { email: user.email, id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );

      user.token = token;
<<<<<<< HEAD
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
=======
      user.save();
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      }
>>>>>>> a73f0d55b4253365a9ad58b1ea748320ae5daa4c
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user_id: user._id,
        message: `User Login Success`,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: `Password is incorrect`,
      });
    }
  } catch (error) {
<<<<<<< HEAD
    console.error(error);
    // Return 500 Internal Server Error status code with error message
=======
    console.error(error)
>>>>>>> a73f0d55b4253365a9ad58b1ea748320ae5daa4c
    return res.status(500).json({
      success: false,
      message: `Login Failure Please Try Again`,
    });
  }
<<<<<<< HEAD
};
// Send OTP For Email Verification
exports.sendotp = async (req, res) => {
  try {
    const { email } = req.body;
    console.log(email);

    // Check if user is already present
    // Find user with provided email
    const checkUserPresent = await User.findOne({ email });
    // to be used in case of signup

    // If user found with provided email
=======
}

exports.sendotp = async (req, res) => {
  try {
    const { email } = req.body
    const checkUserPresent = await User.findOne({ email })
>>>>>>> a73f0d55b4253365a9ad58b1ea748320ae5daa4c
    if (checkUserPresent) {
      return res.status(401).json({
        success: false,
        message: `User is Already Registered`,
      });
    }

    var otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

<<<<<<< HEAD
    const result = await OTP.findOne({ otp: otp });
    console.log("Result is Generate OTP Func");
    console.log("OTP", otp);
    console.log("Result", result);
=======
    const result = await OTP.findOne({ otp: otp })
>>>>>>> a73f0d55b4253365a9ad58b1ea748320ae5daa4c
    while (result) {
      otp = otpGenerator.generate(6, { upperCaseAlphabets: false });
    }
<<<<<<< HEAD
    const otpPayload = { email, otp };
    const otpBody = await OTP.create(otpPayload);
    console.log("OTP Body", otpBody);
=======
    const otpPayload = { email, otp }
    const otpBody = await OTP.create(otpPayload);
>>>>>>> a73f0d55b4253365a9ad58b1ea748320ae5daa4c
    res.status(200).json({
      success: true,
      message: `OTP Sent Successfully`,
      otp,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

exports.changePassword = async (req, res) => {
  try {
    // Get user data from req.user
    const userDetails = await User.findById(req.user.id);

    // Get old password, new password, and confirm new password from req.body
    const { oldPassword, newPassword } = req.body;

    // Validate old password
    const isPasswordMatch = await bcrypt.compare(
      oldPassword,
      userDetails.password
    );
<<<<<<< HEAD
=======

>>>>>>> a73f0d55b4253365a9ad58b1ea748320ae5daa4c
    if (!isPasswordMatch) {
      // If old password does not match, return a 401 (Unauthorized) error
      return res
        .status(401)
        .json({ success: false, message: "The password is incorrect" });
    }

    // Update password
<<<<<<< HEAD
    const encryptedPassword = await bcrypt.hash(newPassword, 10);
    const updatedUserDetails = await User.findByIdAndUpdate(
      req.user.id,
=======
    const encryptedPassword = await bcrypt.hash(newPassword, 10)
    const updatedUserDetails = await User.findByIdAndUpdate(req.user.id,
>>>>>>> a73f0d55b4253365a9ad58b1ea748320ae5daa4c
      { password: encryptedPassword },
      { new: true }
    );

    // Send notification email
    try {
      const emailResponse = await mailSender(updatedUserDetails.email,
        "Password for your account has been updated",
        passwordUpdated(
          `${updatedUserDetails.email},Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
        )
      );
<<<<<<< HEAD
      console.log("Email sent successfully:", emailResponse.response);
=======
>>>>>>> a73f0d55b4253365a9ad58b1ea748320ae5daa4c
    } catch (error) {
      // If there's an error sending the email, log the error and return a 500 (Internal Server Error) error
      console.error("Error occurred while sending email:", error);
      return res.status(500).json({
        success: false,
        message: "Error occurred while sending email",
        error: error.message,
      });
    }

    // Return success response
    return res
      .status(200)
      .json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    // If there's an error updating the password, log the error and return a 500 (Internal Server Error) error
    console.error("Error occurred while updating password:", error);
    return res.status(500).json({
      success: false,
      message: "Error occurred while updating password",
      error: error.message,
    });
  }
<<<<<<< HEAD
};
=======
}

exports.logout = async (req, res) => {
  try {

    const user = await User.findOne({ _id: req.user.id });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: `Invalid Token`,
      });
    }
    user.token = '';
    user.save();

    // Clear the token cookie from the browser
    res.clearCookie('token');
    console.log('done');

    res.sendStatus(204);
  } catch (error) {
    console.log('error while logging out :', error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
>>>>>>> a73f0d55b4253365a9ad58b1ea748320ae5daa4c
