import { createStore } from "../lib/restate";
import { authSlice } from "./slices/auth.slice";
import { generalSlice } from "./slices/general.slice";

export const { Provider, useSelecteor, useDispatcher } = createStore({
  name: "helpdesk",
  slices: [authSlice, generalSlice],
  persist: true,
});
