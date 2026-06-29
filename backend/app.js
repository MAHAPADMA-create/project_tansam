require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/userroutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();

/*
  Middleware
*/
app.use(cors());

// ✅ JSON parser (already correct)
app.use(express.json());

// 🔥 ADD THIS LINE (IMPORTANT)
app.use(express.urlencoded({ extended: true }));

/*
  Routes
*/
app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);

/*
  Test Route
*/
app.get("/", (req, res) => {
    res.send("Backend Running Successfully");
});

module.exports = app;