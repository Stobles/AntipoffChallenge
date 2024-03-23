import MainLayout from "../views/Layouts/MainLayout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { mainRoutes, unAuthRoutes } from "./routes";
import { NotFound } from "../views/NotFound";
import UnAuthGuard from "./UnAuthGurad";
import AuthGuard from "./AuthGuard";

const AppRouter = () => {
  const AppRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<AuthGuard />}>
          <Route element={<MainLayout />}>
            {mainRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Route>
        </Route>
        <Route element={<UnAuthGuard />}>
          {unAuthRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={AppRoutes} />;
};

export default AppRouter;
