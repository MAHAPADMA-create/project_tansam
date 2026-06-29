import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {

  const token = localStorage.getItem("token");

  let user = null;

  try {
    const storedUser = localStorage.getItem("user");
    user = storedUser ? JSON.parse(storedUser) : null;
  } catch (err) {
    user = null;
  }

  console.log("RAW USER:", localStorage.getItem("user"));
  console.log("PARSED USER:", user);
  console.log("ROLE:", user?.role);
  console.log("ALLOWED:", allowedRoles);

  if (!token || !user) {
    return <Navigate to="/login" />;
  }

  if (!user.role || !allowedRoles.includes(user.role)) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;