import { NavLink, useNavigate } from "react-router-dom";
import "./sidebar.css"
function SuperAdminSidebar() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="sidebar">

      <h2>Super Admin</h2>

      <NavLink to="/superadmin/dashboard">Dashboard</NavLink>
      <NavLink to="/superadmin/admins">Admins</NavLink>
      <NavLink to="/superadmin/roles">Roles</NavLink>

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>

    </div>
  );
}

export default SuperAdminSidebar;