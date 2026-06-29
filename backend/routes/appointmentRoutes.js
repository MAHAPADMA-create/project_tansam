const express = require("express");
const router = express.Router();

const {
    bookAppointment,
    getMyAppointments,
    updateAppointment,
    deleteAppointment,
    getAllAppointments
} = require("../controller/appointmentController");

const authMiddleware = require("../middleware/authMiddleware");

// Book appointment
router.post("/book", authMiddleware, bookAppointment);

// Get my appointments
router.get("/my", authMiddleware, getMyAppointments);

// Get all (admin)
router.get("/all", authMiddleware, getAllAppointments);

// Update appointment
router.put("/:id", authMiddleware, updateAppointment);

// Delete appointment
router.delete("/:id", authMiddleware, deleteAppointment);

module.exports = router;