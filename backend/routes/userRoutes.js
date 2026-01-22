const express = require("express");
const router = express.Router();
const {
  addUser,
  fetchUsers,
  updateUser,
  deleteUser,
  loginUser
} = require('../controllers/userController');

const { protect, adminOnly } = require('../middleware/authMiddleware');

// تسجيل الدخول
router.post("/login", loginUser);

// CRUD المستخدمين
router.get("/", protect, fetchUsers);          // كل المستخدمين يحتاج Token
router.post("/", protect, adminOnly, addUser); // إنشاء مستخدم Admin فقط
router.put("/:id", protect, adminOnly, updateUser);
router.delete("/:id", protect, adminOnly, deleteUser);

module.exports = router;
