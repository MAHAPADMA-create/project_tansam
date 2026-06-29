const db = require("../config/db");

/* =========================
   BOOK APPOINTMENT (EMPLOYEE)
========================= */
exports.bookAppointment = (req, res) => {

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
        (employee_id, meeting_title, meeting_date, meeting_time, meeting_type, description, status)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql,
        [
            employee_id,
            meeting_title,
            meeting_date,
            meeting_time,
            meeting_type,
            description,
            "Pending"   // ✅ FIXED (match DB ENUM)
        ],
        (err) => {
            if (err) return res.status(500).json(err);

            res.status(201).json({
                message: "Appointment booked successfully"
            });
        }
    );
};


/* =========================
   EMPLOYEE - MY APPOINTMENTS
========================= */
exports.getMyAppointments = (req, res) => {

    const employee_id = req.user.id;

    const sql = `
        SELECT * FROM appointments
        WHERE employee_id = ?
        ORDER BY meeting_date ASC, meeting_time ASC
    `;

    db.query(sql, [employee_id], (err, result) => {
        if (err) return res.status(500).json(err);

        res.status(200).json(result);
    });
};


/* =========================
   ADMIN - ALL APPOINTMENTS
========================= */
exports.getAllAppointments = (req, res) => {

    const sql = `
        SELECT a.*, u.name AS employee_name
        FROM appointments a
        JOIN users u ON a.employee_id = u.id
        ORDER BY a.id DESC
    `;

    db.query(sql, (err, result) => {
        if (err) return res.status(500).json(err);

        res.status(200).json(result);
    });
};


/* =========================
   ADMIN - APPROVE / REJECT
========================= */
exports.updateAppointmentStatus = (req, res) => {

    const { id } = req.params;
    let { status } = req.body;

    // SAFE normalization
    const map = {
        approved: "Approved",
        Approved: "Approved",
        pending: "Pending",
        Pending: "Pending",
        rejected: "rejected",
        Rejected: "rejected"
    };

    status = map[status] || status;

    const sql = `
        UPDATE appointments
        SET status = ?
        WHERE id = ?
    `;

    db.query(sql, [status, id], (err) => {
        if (err) return res.status(500).json(err);

        res.status(200).json({
            message: "Status updated successfully"
        });
    });
};


/* =========================
   UPDATE (EMPLOYEE)
========================= */
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
        SET meeting_title=?, meeting_date=?, meeting_time=?, meeting_type=?, description=?
        WHERE id=? AND employee_id=?
    `;

    db.query(sql,
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

            if (err) return res.status(500).json(err);

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    message: "Not found"
                });
            }

            res.json({
                message: "Updated successfully"
            });
        }
    );
};


/* =========================
   DELETE
========================= */
exports.deleteAppointment = (req, res) => {

    const employee_id = req.user.id;
    const appointment_id = req.params.id;

    const sql = `
        DELETE FROM appointments
        WHERE id=? AND employee_id=?
    `;

    db.query(sql, [appointment_id, employee_id], (err, result) => {

        if (err) return res.status(500).json(err);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Not found"
            });
        }

        res.json({
            message: "Deleted successfully"
        });
    });
};