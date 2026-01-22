import { useState } from "react";
import axios from "axios";

function UserForm({ onSubmit }) {
  const [formData, setFormData] = useState({ name: "", email: "", role: "User" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users", formData);
      alert(res.data.message);
      setFormData({ name: "", email: "", role: "User" });
      if (onSubmit) onSubmit(res.data.user);
    } catch (error) {
      alert("Failed to add user ❌");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Role:</label>
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
      </div>
      <button type="submit">Save User</button>
    </form>
  );
}

export default UserForm;
