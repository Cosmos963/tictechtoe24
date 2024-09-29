require('dotenv').config()
console.log(process.env.CLOUD_NAME,
	process.env.API_SECRET,
	process.env.API_KEY);


const cloudinary = require('cloudinary').v2;

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.API_SECRET,
	api_secret: process.env.API_KEY,
});

module.exports = cloudinary;