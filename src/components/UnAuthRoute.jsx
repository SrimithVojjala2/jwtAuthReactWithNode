
import { Navigate, Outlet } from "react-router-dom";

const UnAuthRoute = () => {
    const token = localStorage.getItem('jwtToken');

    
  return !token ? <Outlet /> : <Navigate to="/" />
}

export default UnAuthRoute