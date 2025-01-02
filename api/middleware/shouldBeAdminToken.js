import jwt from "jsonwebtoken";

export const shouldBeAdminToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Not Authenticated!" });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
        if (err) {
            return res.status(403).json({ message: "Token is not Valid!" });
        }

        console.log("Payload from token:", payload);

        if (!payload.isAdmin) {
            return res.status(403).json({ message: "Not authorized! payload" });
        }

        req.userId = payload.id; // Optional: Add user ID to request object
        req.isAdmin = payload.isAdmin;

        next(); // Proceed to the next middleware or route handler
    });
};
