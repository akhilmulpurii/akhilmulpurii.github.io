import { SnackbarContext } from "@/providers/SnackbarProvider";
import { useCallback, useContext } from "react";

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar was called outside SnackbarProvider");
  }
  const { dispatch } = context;

  return useCallback(
    (snack) => {
      dispatch({ type: "ADD_SNACKBAR", payload: { current: snack } });
      setTimeout(() => {
        dispatch({ type: "REMOVE_SNACKBAR", payload: { key: snack?.key } });
      }, 4000);
    },
    [dispatch]
  );
};
