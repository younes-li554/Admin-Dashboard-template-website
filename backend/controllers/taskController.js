const Task = require('../models/Task');

// CREATE TASK
const addTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();

    res.status(201).json({ message: "Task created successfully ✅", task });
  } catch (error) {
    console.error("ADD TASK ERROR ❌", error);
    res.status(500).json({ error: "Failed to create task" });
  }
};

// READ TASKS
const fetchTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate('assignedTo');
    res.json(tasks);
  } catch (error) {
    console.error("FETCH TASKS ERROR ❌", error);
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
};

// UPDATE TASK
const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({ message: "Task updated successfully ✅", updatedTask });
  } catch (error) {
    console.error("UPDATE TASK ERROR ❌", error);
    res.status(500).json({ error: "Failed to update task" });
  }
};

// DELETE TASK
const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted successfully ✅" });
  } catch (error) {
    console.error("DELETE TASK ERROR ❌", error);
    res.status(500).json({ error: "Failed to delete task" });
  }
};

module.exports = {
  addTask,
  fetchTasks,
  updateTask,
  deleteTask
};
