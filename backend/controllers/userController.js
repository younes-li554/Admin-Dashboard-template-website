const AdminUser = require('../models/AdminUser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');

const JWT_SECRET = "your_secret_key_here"; // ضع secret قوي لاحقًا في env

// CREATE user (signup) مع تشفير كلمة المرور
const addUser = async (req, res) => {
  try {
    const { name, email, role, password } = req.body;
    if (!name || !email || !role || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Invalid email" });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new AdminUser({ name, email, role, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User added successfully ✅", user });
  } catch (error) {
    console.error("ADD USER ERROR ❌", error);
    res.status(500).json({ error: error.message });
  }
};

// LOGIN مع JWT
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await AdminUser.findOne({ email });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: "Login successful ✅", token, user });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};

// READ
const fetchUsers = async (req, res) => {
  try {
    const users = await AdminUser.find();
    res.json(users);
  } catch (error) {
    console.error("FETCH USERS ERROR ❌", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

// UPDATE
const updateUser = async (req, res) => {
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    const updatedUser = await AdminUser.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ message: "User updated successfully ✅", updatedUser });
  } catch (error) {
    res.status(500).json({ error: "Failed to update user ❌" });
  }
};

// DELETE
const deleteUser = async (req, res) => {
  try {
    await AdminUser.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully ✅" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user ❌" });
  }
};

module.exports = { addUser, fetchUsers, updateUser, deleteUser, loginUser };
