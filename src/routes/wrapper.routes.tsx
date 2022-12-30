// import { Route, Navigate, Outlet } from "react-router-dom";
import { Route, Navigate, Outlet } from "react-router-dom";
// import { getAuthData } from "../services/localStorage";

interface IWrapperRoute {
  redirect?: string;
  isPrivate?: boolean;
}

const WrapperRoute: React.FC<IWrapperRoute> = ({ isPrivate, redirect = "/" }) => {
  // const token = getAuthData();
  const token = "";

  if (!token && isPrivate) {
    return <Navigate replace to={redirect} />;
  }

  return <Outlet />;
};

export default WrapperRoute;
