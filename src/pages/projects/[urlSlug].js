import * as React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { data } from "../../components/QuickViewSection/data";
import ProjectDetailsHero from "../../components/ProjectDetailsHero";
import ProjectDetailsSection from "../../components/ProjectDetailsSection";
import TechStack from "../../components/TechStack";
import useLoader from "../../hooks/useLoader";
import { useRouter } from "next/router";
import Head from "next/head";
import DownloadLinks from "@/components/DownloadLinks";

// markup
const IndexPage = () => {
  const [project, setProject] = React.useState({});
  const router = useRouter();
  const { urlSlug } = router.query;

  const { setLoader } = useLoader();

  React.useEffect(() => {
    if (urlSlug) {
      try {
        setLoader(true);
        const findProject = data.projects.find(
          (project) => project.urlSlug === urlSlug
        );
        if (findProject) {
          setProject(findProject);
        }
      } catch (error) {
      } finally {
        setTimeout(() => {
          setLoader(false);
        }, 1000);
      }
    }
  }, [urlSlug]);
  console.log(123, project);

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

export default IndexPage;
