import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { LoginPage } from "./pages/auth/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
