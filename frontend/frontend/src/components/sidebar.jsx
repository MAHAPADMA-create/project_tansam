import { NavLink } from "react-router-dom";

function Sidebar() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="sidebar">

      <h2 className="logo">My App</h2>

      {/* SUPERADMIN MENU */}
      {user.role === "superadmin" && (
        <>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/admins">Admins</NavLink>
          <NavLink to="/roles">Roles</NavLink>
        </>
      )}

      {/* ADMIN MENU */}
      {user.role === "admin" && (
        <>
          <NavLink to="/admin-dashboard">Dashboard</NavLink>
          <NavLink to="/admin/users">Users</NavLink>
          <NavLink to="/admin/appointments">Appointments</NavLink>
        </>
      )}

      {/* EMPLOYEE MENU (UNCHANGED) */}
      {user.role === "employee" && (
        <>
          <NavLink to="/employee-dashboard">Dashboard</NavLink>
          <NavLink to="/appointment">Book Appointment</NavLink>
          <NavLink to="/my-appointments">My Appointments</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </>
      )}

    </div>
  );
}

export default Sidebar;