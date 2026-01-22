import { useState } from "react";
import axios from "axios";

function TaskForm({ onSubmit }) {
  const [formData, setFormData] = useState({ title: "", description: "", status: "Pending" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/tasks", formData);
      alert(res.data.message);
      setFormData({ title: "", description: "", status: "Pending" });
      if (onSubmit) onSubmit(res.data.task);
    } catch (error) {
      alert("Failed to create task ❌");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />
      </div>
      <div>
        <label>Status:</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <button type="submit">Save Task</button>
    </form>
  );
}

export default TaskForm;
