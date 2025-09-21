import { Navigate, Outlet } from 'react-router-dom'
import { isAuth } from '../auth'
export default function Protected() {
  if (!isAuth()) return <Navigate to="/login" replace />
  return <Outlet />
}