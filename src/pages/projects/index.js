import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectsListHero from "../../components/ProjectsListHero";
import TimelineComponent from "../../components/TimelineComponent";
import Head from "next/head";

// markup
const IndexPage = () => {
  return (
    <main>
      <Head>
        <meta charSet="utf-8" />
        <title>My Projects</title>
      </Head>
      <Header />
      <ProjectsListHero />
      <TimelineComponent />
      <Footer />
    </main>
  );
};

export default IndexPage;
