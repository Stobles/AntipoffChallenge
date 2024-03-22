import type { RootState } from "../app/store";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const UnAuthGuard = () => {
  const { token } = useSelector((state: RootState) => state.rootReducer.auth);

  return token ? <Navigate to="/" replace /> : <Outlet />;
};

export default UnAuthGuard;
