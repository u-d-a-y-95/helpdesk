import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/auth/login";
import { Main } from "./pages/main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "settings",
      },
    ],
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);
