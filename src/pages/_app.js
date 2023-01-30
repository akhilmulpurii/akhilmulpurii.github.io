import React from "react";
import App from "next/app";
import "../main.scss";
import LoaderProvider from "../providers/LoaderProvider";

class MyApp extends App {
  constructor(props) {
    super(props);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <LoaderProvider>
        <Component {...pageProps} />
      </LoaderProvider>
    );
  }
}

export default MyApp;
