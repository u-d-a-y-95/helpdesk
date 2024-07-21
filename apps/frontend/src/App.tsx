import axios from "axios";
import { ReactNode } from "react";

export const App = ({ children }: { children: ReactNode }) => {
  axios.interceptors.response.use(
    () => {},
    (error) => {
      if (error.config.toast) {
        console.log(error.response.data.message);
      }
      return error;
    }
  );
  return <>{children}</>;
};
