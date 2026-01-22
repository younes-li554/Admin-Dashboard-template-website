const express = require("express");
const router = express.Router();

const {
  addTask,
  fetchTasks,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

router.get("/", fetchTasks);
router.post("/", addTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
