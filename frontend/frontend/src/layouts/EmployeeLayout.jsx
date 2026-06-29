import EmployeeSidebar from "../components/employeesidebar";
import { Outlet } from "react-router-dom";
import "./layout.css";

function EmployeeLayout() {
  return (
    <div className="layout">

      <EmployeeSidebar />

      <div className="main-content">

        {/* TOP BAR */}
        <div className="topbar">
          <h2>Employee Dashboard</h2>
        </div>

        {/* CONTENT AREA */}
        <div className="page-content">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default EmployeeLayout;