import React from "react";
import App from "next/app";
import "../main.scss";
import LoaderProvider from "../providers/LoaderProvider";
import SnackbarProvider from "@/providers/SnackbarProvider";
import FirebaseProvider from "@/providers/FirebaseProvider";

class MyApp extends App {
  constructor(props) {
    super(props);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <FirebaseProvider>
        <SnackbarProvider>
          <LoaderProvider>
            <Component {...pageProps} />
          </LoaderProvider>
        </SnackbarProvider>
      </FirebaseProvider>
    );
  }
}

export default MyApp;
