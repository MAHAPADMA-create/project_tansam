import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Dashboard from "./pages/dashboard/dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/profile/profile";
import AdminDashboard from "./pages/admindashboard/admindashboard";
import EmployeeDashboard from "./pages/employeedashboard/employeedashboard";

import Appointment from "./pages/appointment/appointment";
import MyAppointments from "./pages/myappointments/myappointments";

import AdminAppointments from "./pages/adminappointments/adminappointments";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Register */}
        <Route
          path="/"
          element={<Register />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Super Admin */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["superadmin"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-appointments"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminAppointments />
            </ProtectedRoute>
          }
        />

        {/* Employee Dashboard */}
        <Route
          path="/employee-dashboard"
          element={
            <ProtectedRoute allowedRoles={["employee"]}>
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />

        {/* Book Appointment */}
        <Route
          path="/appointment"
          element={
            <ProtectedRoute allowedRoles={["employee"]}>
              <Appointment />
            </ProtectedRoute>
          }
        />

        {/* My Appointments */}
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

      </Routes>

    </BrowserRouter>

  );

}

export default App;