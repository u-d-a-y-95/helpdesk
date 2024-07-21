import { Slice } from "../../lib/restate/index.type";

type Initial = {
  isLogged: boolean;
  token: string | null;
};

type Reducer = {
  setLogin: (obj: { token: string }) => void;
};

export const authSlice: Slice<Initial, Reducer> = {
  name: "auth",
  initial: {
    isLogged: false,
    token: null,
  },
  reducer: (state, setState) => ({
    setLogin(obj) {
      console.log(obj);
      setState({
        ...state,
        isLogged: true,
        token: obj.token,
      });
    },
  }),
};
