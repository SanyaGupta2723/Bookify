import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  try {
    // 1️⃣ Header se token nikaalna
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({ message: "No token provided" });
    }

    // 2️⃣ "Bearer TOKEN" → TOKEN
    const token = authHeader.split(" ")[1];

    // 3️⃣ Token verify
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4️⃣ User ID request me attach
    req.userId = decoded.id;

    // 5️⃣ Next route pe jao
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default protect;
