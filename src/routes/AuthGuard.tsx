import type { RootState } from "../app/store";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthGuard = () => {
  const { token } = useSelector((state: RootState) => state.rootReducer.auth);

  return token ? <Outlet /> : <Navigate to="/register" replace />;
};

export default AuthGuard;
