import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProjectDetailsHero from "../../components/ProjectDetailsHero";
import ProjectDetailsSection from "../../components/ProjectDetailsSection";
import TechStack from "../../components/TechStack";
import Head from "next/head";
import DownloadLinks from "@/components/DownloadLinks";
import data from "../../helpers/projects.json";
const projects = data?.projects || [];

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

export const getStaticPaths = async () => {
  return {
    paths: projects.map(p => (
      {
        params: {
          urlSlug: p.urlSlug
        },
      }, // See the "paths" section below
    )),
    fallback: true, // false or "blocking"
  }
}

export function getStaticProps({ params }) {

  let project = projects.find(p => p.urlSlug === params.urlSlug);
    return {
      props: {
        project,
      },
    };
  
}

export default IndexPage;
