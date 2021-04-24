import React from "react";

export const LoaderContext = React.createContext();

export default function LoaderProvider({ children }) {
  const [loading, setLoading] = React.useState(false);

  const value = React.useMemo(() => ({ loading, setLoading }), [
    loading,
    setLoading,
  ]);

  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
}
