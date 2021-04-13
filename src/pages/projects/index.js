import * as React from "react";
import "../../main.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import ProjectsListHero from "../../components/ProjectsListHero";
import TimelineComponent from "../../components/TimelineComponent";

// markup
const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Projects</title>
      </Helmet>
      <Header />
      <ProjectsListHero />
      <TimelineComponent />
      <Footer />
    </main>
  );
};

export default IndexPage;
