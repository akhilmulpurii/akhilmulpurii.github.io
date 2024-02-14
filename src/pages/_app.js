import React from "react";
import App from "next/app";
import "../main.scss";
import LoaderProvider from "../providers/LoaderProvider";
import SnackbarProvider from "@/providers/SnackbarProvider";
import withSplashScreen from "@/components/SplashScreen";
import Head from "next/head";

class MyApp extends App {
  constructor(props) {
    super(props);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <SnackbarProvider>
        <LoaderProvider>
          <Head>
            <title>Akhil Mulpuri | Full Stack Web Developer</title>
          </Head>
          <Component {...pageProps} />
        </LoaderProvider>
      </SnackbarProvider>
    );
  }
}

export default withSplashScreen(MyApp);
