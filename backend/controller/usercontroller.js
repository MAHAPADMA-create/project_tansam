const db = require("../config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {

    const {
    name,
    email,
    password,
    age
} = req.body;

    const finalRole="employee";

    const checkUser =
        "SELECT * FROM users WHERE email=?";

    db.query(
        checkUser,
        [email],
        async (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            if (result.length > 0) {

                return res.status(400).json({
                    message: "Email Already Exists"
                });

            }

            const hashedPassword =
                await bcrypt.hash(password, 10);

            const insertQuery =
                `INSERT INTO users
                (name,email,password,age,role)
                VALUES(?,?,?,?,?)`;

            db.query(
                insertQuery,
                [
                    name,
                    email,
                    hashedPassword,
                    age,
                    finalRole
                ],
                (err, result) => {

                    if (err) {
                        return res.status(500).json(err);
                    }

                    res.status(201).json({
                        message:
                        "User Registered Successfully"
                    });

                }
            );

        }
    );

};
exports.login = (req, res) => {

    const { email, password } = req.body;

    const sql = "SELECT * FROM users WHERE email=?";

    db.query(sql, [email], async (err, result) => {

        if (err) {
            console.log("DB ERROR:", err);
            return res.status(500).json({
                message: "Database error"
            });
        }

        console.log("DB RESULT:", result);

        if (!result || result.length === 0) {
            return res.status(401).json({
                message: "Invalid Credentials (user not found)"
            });
        }

        const user = result[0];

        console.log("USER FOUND:", user.email);
        console.log("ENTERED PASSWORD:", password);
        console.log("HASH FROM DB:", user.password);

        try {

            const isMatch = await bcrypt.compare(password, user.password);

            console.log("COMPARE RESULT:", isMatch);

            if (!isMatch) {
                return res.status(401).json({
                    message: "Invalid Credentials (password mismatch)"
                });
            }

            const token = jwt.sign(
                {
                    id: user.id,
                    email: user.email,
                    role: user.role
                },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
            );

            delete user.password;

            return res.status(200).json({
                message: "Login Successful",
                token,
                user
            });

        } catch (error) {
            console.log("ERROR:", error);

            return res.status(500).json({
                message: "Server error"
            });
        }
    });
};
exports.dashboard = (req, res) => {

    res.status(200).json({
        message: "Dashboard Access Success",
        user: req.user
    });

};