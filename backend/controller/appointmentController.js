const db = require("../config/db");

// Book Appointment
exports.bookAppointment = (req, res) => {
    console.log("BODY RECEIVED:", req.body);

    const employee_id = req.user.id;

    const {
        meeting_title,
        meeting_date,
        meeting_time,
        meeting_type,
        description
    } = req.body;

    const sql = `
        INSERT INTO appointments
        (employee_id, meeting_title, meeting_date, meeting_time, meeting_type, description)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            employee_id,
            meeting_title,
            meeting_date,
            meeting_time,
            meeting_type,
            description,
            "pending"
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.status(201).json({
                message: "Appointment booked successfully"
            });

        }
    );

};
exports.getMyAppointments = (req, res) => {

    const employee_id = req.user.id;

    const sql = `
        SELECT *
        FROM appointments
        WHERE employee_id = ?
        ORDER BY meeting_date ASC, meeting_time ASC
    `;

    db.query(sql, [employee_id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }
        const formatted = result.map(item => ({
            ...item,
            meeting_date: item.meeting_date
                ? item.meeting_date.toISOString().split("T")[0]
                : null
        }));


        res.status(200).json(formatted);

    });

};
exports.updateAppointment = (req, res) => {

    const employee_id = req.user.id;
    const appointment_id = req.params.id;

    const {
        meeting_title,
        meeting_date,
        meeting_time,
        meeting_type,
        description
    } = req.body;

    const sql = `
        UPDATE appointments
        SET meeting_title = ?, meeting_date = ?, meeting_time = ?, meeting_type = ?, description = ?
        WHERE id = ? AND employee_id = ?
    `;

    db.query(
        sql,
        [
            meeting_title,
            meeting_date,
            meeting_time,
            meeting_type,
            description,
            appointment_id,
            employee_id
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    message: "Appointment not found or not allowed"
                });
            }

            res.status(200).json({
                message: "Appointment updated successfully"
            });

        }
    );
};
exports.deleteAppointment = (req, res) => {

    const employee_id = req.user.id;
    const appointment_id = req.params.id;

    const sql = `
        DELETE FROM appointments
        WHERE id = ? AND employee_id = ?
    `;

    db.query(sql, [appointment_id, employee_id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Appointment not found or not allowed"
            });
        }

        res.status(200).json({
            message: "Appointment deleted successfully"
        });

    });
};
exports.getAllAppointments = (req, res) => {

    const sql = `
        SELECT * FROM appointments
        ORDER BY meeting_date ASC, meeting_time ASC
    `;

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(result);
    });
};