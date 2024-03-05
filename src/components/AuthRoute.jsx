
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
    const token = localStorage.getItem('jwtToken');
  return token ? <Outlet /> : <Navigate to="/signin" />
}

export default AuthRoute