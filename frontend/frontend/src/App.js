import {
 BrowserRouter,
 Routes,
 Route
} from "react-router-dom";

import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Dashboard from "./pages/dashboard/dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminAppointments from "./pages/admindashboard/AdminAppointments";
// import Users from "./pages/users/users";
// import Admins from "./pages/admins/admins";
// import Roles from "./pages/roles/roles";
import AdminDashboard from "./pages/admindashboard/admindashboard";
import EmployeeDashboard from "./pages/employeedashboard/employeedashboard";
function App() {

 return (

  <BrowserRouter>

   <Routes>

    <Route
      path="/"
      element={<Register />}
    />

    <Route
      path="/register"
      element={<Register />}
    />

    <Route
      path="/login"
      element={<Login />}
    />

   <Route
  path="/dashboard"
  element={
    <ProtectedRoute allowedRoles={["superadmin"]}>
      <Dashboard />
    </ProtectedRoute>
  }
/>
    {/*
    <Route
 path="/users"
 element={<Users />}
/>
    <Route
 path="/admins"
 element={<Admins />}
/>
    <Route
 path="/roles"
 element={<Roles />}
/>*/}
<Route
  path="/admin-dashboard"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>
 
    <Route
  path="/employee-dashboard"
  element={
    <ProtectedRoute allowedRoles={["employee"]}>
      <EmployeeDashboard />
    </ProtectedRoute>
  }
/>
<Route path="/admin-appointments" element={<AdminAppointments />} />

   </Routes>

  </BrowserRouter>

 );

}

export default App;