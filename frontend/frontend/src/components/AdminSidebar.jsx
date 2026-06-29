import { NavLink, useNavigate } from "react-router-dom";
import "./adminsidebar.css"
function AdminSidebar() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="sidebar">

      <h2>Admin Panel</h2>

      <NavLink to="/admin/dashboard">Dashboard</NavLink>
      <NavLink to="/admin/users">Users</NavLink>
      <NavLink to="/admin/appointments">Appointments</NavLink>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>

    </div>
  );
}

export default AdminSidebar;