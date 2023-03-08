import React from "react";
import App from "next/app";
import "../main.scss";
import LoaderProvider from "../providers/LoaderProvider";
import SnackbarProvider from "@/providers/SnackbarProvider";

class MyApp extends App {
  constructor(props) {
    super(props);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <SnackbarProvider>
        <LoaderProvider>
          <Component {...pageProps} />
        </LoaderProvider>
      </SnackbarProvider>
    );
  }
}

export default MyApp;
