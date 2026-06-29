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

       <NavLink to="/employee/dashboard">Dashboard</NavLink>
<NavLink to="/employee/appointment">Book Appointment</NavLink>
<NavLink to="/employee/my-appointments">My Appointments</NavLink>
<NavLink to="/employee/profile">Profile</NavLink>
      </nav>

      <button className="logout-btn" onClick={logout}>
        🚪 Logout
      </button>

    </div>
  );
}

export default EmployeeSidebar;