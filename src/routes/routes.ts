import { HomePage } from "../views/Home";
import { DetailsPage } from "../views/Details";
import { RegisterPage } from "../views/Register";
import { LoginPage } from "../views/Login";

const HOME_ROUTE = "/";
const DETAILS_ROUTE = "/details/:id";
const LOGIN_ROUTE = "/login";
const REGISTER_ROUTE = "/register";

export const mainRoutes = [
  { path: HOME_ROUTE, Component: HomePage },
  { path: DETAILS_ROUTE, Component: DetailsPage },
];

export const unAuthRoutes = [
  { path: LOGIN_ROUTE, Component: LoginPage },
  { path: REGISTER_ROUTE, Component: RegisterPage },
];
