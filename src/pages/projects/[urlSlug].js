import * as React from "react";
import "../../main.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import { data } from "../../components/QuickViewSection/data";
import styled from "styled-components";
import Loader from "../../components/Loader";
import ProjectDetailsHero from "../../components/ProjectDetailsHero";
import ProjectDetailsSection from "../../components/ProjectDetailsSection";
import DownloadLinks from "../../components/DownloadLinks";
import TechStack from "../../components/TechStack";

// markup
const IndexPage = ({ params: { urlSlug } }) => {
  const [project, setProject] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    try {
      setLoading(true);
      const findProject = data.projects.find(
        (project) => project.urlSlug === urlSlug
      );
      if (findProject) {
        setProject(findProject);
      }
    } catch (error) {
    } finally {
      // setTimeout(() => {
      setLoading(false);
      // }, 1000);
    }
  }, []);

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{project?.title || "Akhil Mulpuri"}</title>
      </Helmet>
      <Header />
      {loading ? (
        <LoadingContainer>
          <Loader />
        </LoadingContainer>
      ) : (
        <Wrapper>
          <ProjectDetailsHero {...project} />
          <TechStack {...project} />
          {project?.sections?.map((section, index) => (
            <ProjectDetailsSection key={index} {...section} index={index} />
          ))}
          {/* <DownloadLinks {...project} /> */}
        </Wrapper>
      )}
      <Footer />
    </main>
  );
};

export default IndexPage;

const LoadingContainer = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  flex: 1;
`;
