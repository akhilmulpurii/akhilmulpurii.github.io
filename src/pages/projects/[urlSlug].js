import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectDetailsHero from "../../components/ProjectDetailsHero";
import ProjectDetailsSection from "../../components/ProjectDetailsSection";
import TechStack from "../../components/TechStack";
import Head from "next/head";
import DownloadLinks from "@/components/DownloadLinks";
import axios from "axios";

const IndexPage = ({ project = {} }) => {
  return (
    <main>
      <Head>
        <meta charSet="utf-8" />
        <title>{project?.title || "Akhil Mulpuri"}</title>
      </Head>
      <Header />
      <div className="project-wrapper">
        <ProjectDetailsHero {...project} />
        <TechStack {...project} />
        {project?.sections?.map((section, index) => (
          <ProjectDetailsSection key={index} {...section} index={index} />
        ))}
        <DownloadLinks {...project} />
      </div>
      <Footer />
    </main>
  );
};

export async function getServerSideProps(context) {
  const { urlSlug } = context.params;
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const scheme = process.env.VERCEL_ENV !== "development" ? "https" : "http";
  const res = await axios.get(
    `${scheme}://${process.env.VERCEL_URL}/config/projects.json`
  );
  const projects = res.data?.projects || [];

  const project = projects.find((project) => project.urlSlug === urlSlug) || {};
  if (project) {
    return {
      props: {
        project,
      },
    };
  } else {
    return { notFound: true };
  }
}

export default IndexPage;
