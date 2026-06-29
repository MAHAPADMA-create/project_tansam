import SuperAdminSidebar from "../components/SuperAdminSidebar";
import { Outlet } from "react-router-dom";
import "./layout.css";
function SuperAdminLayout() {
  return (
    <div className="layout">
      <SuperAdminSidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default SuperAdminLayout;