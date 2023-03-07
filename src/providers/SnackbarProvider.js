import Snackbar from "@/components/Snackbar";
import reducer from "@/reducers/snackbar_reducer";
import { createContext, useReducer } from "react";

export const SnackbarContext = createContext({
  queue: [],
  dispatch: () => {},
});

export default function SnackbarProvider({ children }) {
  const [{ queue }, dispatch] = useReducer(reducer, { queue: [] });
  return (
    <SnackbarContext.Provider value={{ queue, dispatch }}>
      {queue.map((snack) => (
        <Snackbar
          key={snack.key}
          text={snack.text}
          variant={snack.variant}
          handleClose={() =>
            dispatch({ type: "REMOVE_SNACKBAR", payload: { key: snack.key } })
          }
        />
      ))}
      {children}
    </SnackbarContext.Provider>
  );
}
