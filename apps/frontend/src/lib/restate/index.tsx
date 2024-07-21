import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { Config } from "./index.type";

const combine = (slices, key) => {
  return slices.reduce((acc, item) => {
    acc[item.name] = item[key];
    return acc;
  }, {});
};

const excuteReducers = (reducers, store, dispatch) => {
  const rootReducer = {};
  for (const iterator in reducers) {
    const a = reducers[iterator](
      store[iterator],
      (state) => {
        dispatch({
          key: iterator,
          state,
        });
      },
      store
    );
    rootReducer[iterator] = a;
  }
  return rootReducer;
};

export const createStore = ({ name, slices, persist = false }: Config) => {
  const context = createContext(null);
  const initials = combine(slices, "initial");
  const reducers = combine(slices, "reducer");
  const Provider = ({ children }: { children: ReactNode }) => {
    const [store, dispatch] = useReducer(
      (
        root: any,
        action: {
          key: string;
          state: any;
        }
      ) => {
        const newRoot = {
          ...root,
          [action.key]: action.state,
        };
        return newRoot;
      },
      initials,
      () => {
        if (persist) {
          const data = localStorage.getItem(name);
          if (!data) return initials;
          return JSON.parse(data);
        }
      }
    );

    useEffect(() => {
      localStorage.setItem(name, JSON.stringify(store));
    }, [store]);
    const rootReducer = excuteReducers(reducers, store, dispatch);
    return (
      <context.Provider
        value={{
          store,
          reducers: rootReducer,
        }}
      >
        {children}
      </context.Provider>
    );
  };
  const useSelecteor = (cb) => cb(useContext(context).store);
  const useDispatcher = (cb) => cb(useContext(context).reducers);

  return {
    Provider,
    useSelecteor,
    useDispatcher,
  };
};
