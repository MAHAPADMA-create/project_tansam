const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Token Missing"
        });
    }

    try {

        // ✅ extract token from "Bearer <token>"
        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded; // IMPORTANT

        next();

    } catch (error) {

        return res.status(401).json({
            message: "Invalid Token"
        });

    }
};

module.exports = authMiddleware;