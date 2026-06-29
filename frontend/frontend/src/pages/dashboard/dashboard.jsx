import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  return (
    <div className="layout">

      <Sidebar />

      <div className="main-content">

        <Header />

        <div className="dashboard-container">

          <h1>Super Admin Dashboard</h1>

          <div className="dashboard-cards">

            <div className="card" onClick={() => navigate("/admins")}>
              <h3>Admins</h3>
              <p>Manage Admins</p>
            </div>

            <div className="card" onClick={() => navigate("/roles")}>
              <h3>Roles</h3>
              <p>Role Management</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;