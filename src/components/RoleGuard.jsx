import { Navigate, Outlet } from "react-router-dom";

function getRole() {
  try {
    return JSON.parse(localStorage.getItem("user") || "{}").role;
  } catch {
    return null;
  }
}

export default function RoleGuard({ allow }) {
  const role = getRole(); // aquí respetamos Admin, User, Director
  if (!allow.includes(role)) return <Navigate to="/login" replace />;
  return <Outlet />;
}
