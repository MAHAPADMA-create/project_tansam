const express = require("express");
const router = express.Router();

const {
    bookAppointment,
    getMyAppointments,
    updateAppointment,
    deleteAppointment,
    getAllAppointments,
    updateAppointmentStatus
} = require("../controller/appointmentController");

const authMiddleware = require("../middleware/authMiddleware");

/* EMPLOYEE */
router.post("/book", authMiddleware, bookAppointment);
router.get("/my", authMiddleware, getMyAppointments);
router.put("/:id", authMiddleware, updateAppointment);
router.delete("/:id", authMiddleware, deleteAppointment);

/* ADMIN */
router.get("/all", authMiddleware, getAllAppointments);
router.put("/status/:id", authMiddleware, updateAppointmentStatus);

module.exports = router;