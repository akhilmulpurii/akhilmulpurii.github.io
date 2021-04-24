import React from "react";
import styled from "styled-components";
import Loader from "../components/Loader";

export const LoaderContext = React.createContext();

export default function LoaderProvider({ children }) {
  const [loader, setLoader] = React.useState(false);

  const value = React.useMemo(() => ({ loader, setLoader }), [
    loader,
    setLoader,
  ]);

  return (
    <LoaderContext.Provider value={value}>
      {!!loader && (
        <LoadingContainer>
          <Loader />
        </LoadingContainer>
      )}
      {children}
    </LoaderContext.Provider>
  );
}

const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99999999;
`;
