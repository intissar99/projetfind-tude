import { useEffect, useReducer, createContext, React } from "react";
import Reducers from "./Reducers";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  admin: JSON.parse(localStorage.getItem("admin")) || null,
  users: JSON.parse(localStorage.getItem("users")) || null,
  products: JSON.parse(localStorage.getItem("products")) || null,
  reclamations: JSON.parse(localStorage.getItem("reclamations")) || null,
  isFetching: false,
  error: false,
};
export const Context = createContext(initialState);
export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(Reducers, initialState);

  useEffect(() => {
    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
    } else if (state.admin) {
      localStorage.setItem("admin", JSON.stringify(state.admin));

      localStorage.setItem("users", JSON.stringify(state.users));

      localStorage.setItem("products", JSON.stringify(state.products));


      localStorage.setItem("reclamations", JSON.stringify(state.reclamations));



    }
  }, [state.user, state.admin, state.users]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        admin: state.admin,
        users: state.users,
        products: state.products,
        reclamations: state.reclamations,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
}


