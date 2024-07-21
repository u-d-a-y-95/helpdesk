import { Slice } from "../../lib/restate/index.type";

type Initial = {
  name: string;
};

type Reducer = {
  setName: (name: string) => void;
};

export const generalSlice: Slice<Initial, Reducer> = {
  name: "general",
  initial: {
    name: "",
  },
  reducer: (state, setState) => ({
    setName(name) {
      setState({
        ...state,
        name,
      });
    },
  }),
};
