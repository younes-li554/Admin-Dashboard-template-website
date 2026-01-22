import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>

      <nav className="sidebar-nav">
        <Link to="/">Dashboard</Link>
        <Link to="/users">Users</Link>
        <Link to="/tasks">Tasks</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
