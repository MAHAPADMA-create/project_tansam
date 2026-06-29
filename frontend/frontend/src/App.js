import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/login";
import Register from "./pages/register/register";

/* layouts */
import AdminLayout from "./layouts/AdminLayout";
import SuperAdminLayout from "./layouts/SuperAdminLayout";
import EmployeeLayout from "./layouts/EmployeeLayout";
/* pages */
import Dashboard from "./pages/dashboard/dashboard";
import AdminDashboard from "./pages/admindashboard/admindashboard";
import EmployeeDashboard from "./pages/employeedashboard/employeedashboard";

import Users from "./pages/users/users";
import Admins from "./pages/admins/admins";
import Roles from "./pages/roles/roles";

import Appointment from "./pages/appointment/appointment";
import MyAppointments from "./pages/myappointments/myappointments";
import AdminAppointments from "./pages/adminappointments/adminappointments";

import Profile from "./pages/profile/profile";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* AUTH */}
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* ================= SUPERADMIN ================= */}
        <Route
          path="/superadmin"
          element={
            <ProtectedRoute allowedRoles={["superadmin"]}>
              <SuperAdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="admins" element={<Admins />} />
          <Route path="roles" element={<Roles />} />
        </Route>

        {/* ================= ADMIN ================= */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="appointments" element={<AdminAppointments />} />
        </Route>

        {/* ================= EMPLOYEE (NO CHANGE) ================= */}
        
        <Route
          path="/appointment"
          element={
            <ProtectedRoute allowedRoles={["employee"]}>
              <Appointment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-appointments"
          element={
            <ProtectedRoute allowedRoles={["employee"]}>
              <MyAppointments />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute allowedRoles={["employee"]}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
  path="/employee"
  element={
    <ProtectedRoute allowedRoles={["employee"]}>
      <EmployeeLayout />
    </ProtectedRoute>
  }
>
  <Route path="dashboard" element={<EmployeeDashboard />} />
  <Route path="appointment" element={<Appointment />} />
  <Route path="my-appointments" element={<MyAppointments />} />
  <Route path="profile" element={<Profile />} />
</Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;