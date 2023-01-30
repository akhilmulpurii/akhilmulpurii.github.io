import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectsListHero from "../../components/ProjectsListHero";
import TimelineComponent from "../../components/TimelineComponent";
import Head from "next/head";
import axios from "axios";

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
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const scheme = process.env.VERCEL_ENV !== "development" ? "https" : "http";
  const res = await axios.get(
    `${scheme}://${process.env.VERCEL_URL}/config/projects.json`
  );
  const projects = res.data?.projects || [];
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      projects,
    },
  };
}

export default IndexPage;
