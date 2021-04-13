import * as React from "react";
import "../../main.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";

// markup
const IndexPage = ({ params: { urlSlug } }) => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Projects</title>
      </Helmet>
      <Header />
      {urlSlug}
      <Footer />
    </main>
  );
};

export default IndexPage;
