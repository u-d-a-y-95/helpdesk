import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/auth/login";
import { Main } from "./pages/main";
import { StatusPage } from "./pages/main/settings/status";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "settings",
        children: [
          {
            path: "status",
            element: <StatusPage />,
          },
        ],
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
