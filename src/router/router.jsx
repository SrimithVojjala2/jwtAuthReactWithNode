/* eslint-disable react-refresh/only-export-components */
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AuthRoute from "../components/AuthRoute";
import ProfilePage from "../views/ProfileView";
import UnAuthRoute from "../components/UnAuthRoute";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

export default createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AuthRoute />}>
        <Route path="/" element={<Navigate to="/profile" />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route element={<UnAuthRoute />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </>
  )
);
