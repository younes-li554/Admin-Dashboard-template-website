import { useState } from "react";

function Dashboard() {
  // Default values (static for now)
  const [totalUsers] = useState(120);
  const [totalTasks] = useState(45);
  const [completedTasks] = useState(30);

  return (
    <>
      <h1 className="mb-20">Dashboard Overview</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>{totalUsers}</p>
        </div>

        <div className="stat-card">
          <h3>Total Tasks</h3>
          <p>{totalTasks}</p>
        </div>

        <div className="stat-card">
          <h3>Completed Tasks</h3>
          <p>{completedTasks}</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
