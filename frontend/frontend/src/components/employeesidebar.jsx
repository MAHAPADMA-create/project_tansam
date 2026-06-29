import { NavLink, useNavigate } from "react-router-dom";
import "./employeesidebar.css";

function EmployeeSidebar() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="sidebar">

      <h2 className="logo">Employee Panel</h2>

      <nav>

        <NavLink to="/employee-dashboard" className="link">
          🏠 Dashboard
        </NavLink>

        <NavLink to="/appointment" className="link">
          📅 Book Appointment
        </NavLink>

        <NavLink to="/my-appointments" className="link">
          📋 My Appointments
        </NavLink>

        <NavLink to="/profile" className="link">
          👤 Profile
        </NavLink>

      </nav>

      <button className="logout-btn" onClick={logout}>
        🚪 Logout
      </button>

    </div>
  );
}

export default EmployeeSidebar;