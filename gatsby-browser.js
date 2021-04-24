import React, { Fragment } from "react";
import FirebaseProvider from "./src/providers/FirebaseProvider";
import LoaderProvider from "./src/providers/LoaderProvider";
import "node-snackbar/dist/snackbar.min.css";

export const wrapRootElement = ({ element }) => (
  <Fragment>
    <LoaderProvider>
      <FirebaseProvider>{element}</FirebaseProvider>
    </LoaderProvider>
  </Fragment>
);
