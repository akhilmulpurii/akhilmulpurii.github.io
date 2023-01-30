import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectsListHero from "../../components/ProjectsListHero";
import TimelineComponent from "../../components/TimelineComponent";
import Head from "next/head";
import data from "../../../helpers/projects.json";
const projects = data?.projects || [];

// markup
const IndexPage = ({ projects }) => {
  return (
    <main>
      <Head>
        <meta charSet="utf-8" />
        <title>My Projects</title>
      </Head>
      <Header />
      <ProjectsListHero />
      <TimelineComponent projects={projects} />
      <Footer />
    </main>
  );
};

export async function getStaticProps() {
  return {
    props: {
      projects,
    },
  };
}

export default IndexPage;
