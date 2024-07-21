import { useEffect } from "react";
import { useSelecteor } from "../../state";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();
  const { isLogged } = useSelecteor((state) => state.auth);

  useEffect(() => {
    if (!isLogged) {
      navigate("/auth/login");
    }
  }, [isLogged, navigate]);

  return <></>;
};
