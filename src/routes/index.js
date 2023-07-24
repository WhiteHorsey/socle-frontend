// Layouts
import AnonymousLayout from "../layouts/AnonymousLayout";
import MainLayout from "../layouts/MainLayout";

// Pages
import { LoginPage, RegisterPage, HomePage, ProfilePage, ErrorPage } from "../pages";

export const routes = [
  {
    layout: AnonymousLayout,
    routes: [
      {
        name: "login",
        title: "Login page",
        component: LoginPage,
        path: "/login",
        isPublic: true,
      },
      {
        name: "register",
        title: "Register page",
        component: RegisterPage,
        path: "/register",
        isPublic: true,
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
