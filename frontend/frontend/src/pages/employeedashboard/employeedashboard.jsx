import "./employeedashboard.css";
import EmployeeSidebar from "../../components/employeesidebar";
import Header from "../../components/header";

function EmployeeDashboard() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <div className="layout">

      {/* YOUR ORIGINAL EMPLOYEE SIDEBAR (UNCHANGED) */}
      <EmployeeSidebar />

      {/* MAIN CONTENT AREA ONLY */}
      <div className="content">

        {/* HEADER (STICKY FIX ONLY) */}
        <Header />

        {/* PAGE CONTENT */}
        <div className="dashboard-container">

          <h1>Employee Dashboard</h1>

          <p className="welcome">
            Welcome, <strong>{user?.name || "Employee"}</strong>
          </p>

          {/* CARDS */}
          <div className="dashboard-cards">

            <div className="card">
              <h3>Total Appointments</h3>
              <p>12</p>
            </div>

            <div className="card">
              <h3>Pending</h3>
              <p>4</p>
            </div>

            <div className="card">
              <h3>Approved</h3>
              <p>7</p>
            </div>

            <div className="card">
              <h3>Rejected</h3>
              <p>1</p>
            </div>

          </div>

          {/* BOX */}
          <div className="dashboard-section">
            <h2>Upcoming Appointment</h2>
            <p>Project Discussion</p>
            <p>📅 30 June 2026</p>
            <p>🕙 10:00 AM</p>
            <p>💻 Online</p>
          </div>

          {/* ACTIVITY */}
          <div className="dashboard-section">
            <h2>Recent Activity</h2>
            <ul>
              <li>Appointment booked successfully</li>
              <li>HR approved your meeting</li>
              <li>New appointment scheduled</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}

export default EmployeeDashboard;