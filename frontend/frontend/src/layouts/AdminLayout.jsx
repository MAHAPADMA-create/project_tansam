import AdminSidebar from "../components/AdminSidebar";
import { Outlet } from "react-router-dom";
import "./layout.css";
function AdminLayout() {
  return (
    <div className="layout">
      <AdminSidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;