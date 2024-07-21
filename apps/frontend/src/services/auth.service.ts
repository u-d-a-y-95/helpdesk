import { http } from "../utils/http";

type Login = {
  email: string;
  password: string;
};

export const login = (payload: Login) => {
  return http.post("/auth/signin", payload);
};
