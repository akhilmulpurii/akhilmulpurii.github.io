"use client";
import React from "react";
import Loader from "../components/Loader";

export const LoaderContext = React.createContext();

export default function LoaderProvider({ children }) {
  const [loader, setLoader] = React.useState(false);

  const value = React.useMemo(
    () => ({ loader, setLoader }),
    [loader, setLoader]
  );

  return (
    <LoaderContext.Provider value={value}>
      {!!loader && (
        <div className="loading-container">
          <Loader />
        </div>
      )}
      {children}
    </LoaderContext.Provider>
  );
}
