const jwt = require('jsonwebtoken');
const JWT_SECRET = "your_secret_key_here"; // نفس المفتاح المستخدم في controller

// تحقق من التوكن
const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: "No token, authorization denied" });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "Token is not valid" });
  }
};

// تحقق من دور Admin
const adminOnly = (req, res, next) => {
  if (req.user.role !== 'Admin') {
    return res.status(403).json({ error: "Access denied, Admins only" });
  }
  next();
};

module.exports = { protect, adminOnly };
