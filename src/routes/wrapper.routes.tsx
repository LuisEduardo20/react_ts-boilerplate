import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

interface IWrapperRoute {
  redirect?: string;
  isPrivate?: boolean;
}

const WrapperRoute: React.FC<IWrapperRoute> = ({ isPrivate, redirect = "/" }) => {
  // const userData = useAuth();
  const token = "";

  if (!token && isPrivate) {
    return <Navigate replace to={redirect} />;
  }

  return <Outlet />;
};

export default WrapperRoute;
