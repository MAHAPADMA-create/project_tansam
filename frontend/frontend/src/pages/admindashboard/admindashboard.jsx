import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  const navigate = useNavigate();

  return (
    <div className="layout">

      <Sidebar />

      <div className="main-content">

        <Header />

        <div className="dashboard-container">

          <h1>Admin Dashboard</h1>

          <div className="dashboard-cards">

            <div className="card" onClick={() => navigate("/users")}>
              <h3>Users</h3>
              <p>Manage Users</p>
            </div>

            <div className="card" onClick={() => navigate("/admin-appointments")}>
              <h3>Appointments</h3>
              <p>View & Approve</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;