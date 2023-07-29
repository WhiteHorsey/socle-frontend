// Layouts
import { MainLayout, AnonymousLayout } from "../layouts";
import { renderRoutes } from "./generate-routes.jsx";

// Pages
import { LoginPage, RegisterPage, HomePage, ProfilePage, ErrorPage } from "../pages";

export const routes = [
  {
    layout: AnonymousLayout,
    isPublic: true,
    routes: [
      {
        name: "login",
        title: "Login page",
        component: LoginPage,
        path: "/login",
      },
      {
        name: "register",
        title: "Register page",
        component: RegisterPage,
        path: "/register",
      },
    ],
  },
  {
    layout: MainLayout,
    routes: [
      {
        name: "home",
        title: "Home page",
        component: HomePage,
        path: "/home",
      },
      {
        name: "profile",
        title: "Profile page",
        component: ProfilePage,
        path: "/profile",
      },
    ],
  },
];

// Just add this line
export const Routes = renderRoutes(routes);
