const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const notesRoutes = require("./routes/Notes");
const paymentRoutes = require("./routes/Payments");
const courseRoutes = require("./routes/Course");
const contactUsRoute = require("./routes/Contact");
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");

dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
database.connect();
//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
<<<<<<< HEAD
    origin: "http://localhost:5173",
=======
    origin: "http://127.0.0.1:5500",
>>>>>>> a73f0d55b4253365a9ad58b1ea748320ae5daa4c
    credentials: true,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

//routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/notes", notesRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/reach", contactUsRoute);
// app.use("/api/v1/payment", paymentRoutes);

//def route

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
