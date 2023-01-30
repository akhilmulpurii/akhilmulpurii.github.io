import * as React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import QuickViewSection from "../components/QuickViewSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import data from "../helpers/projects.json";
const projects = data?.projects || [];

const IndexPage = ({ projects = [] }) => {
  return (
    <main>
      <Header />
      <HeroSection />
      <QuickViewSection {...{ projects }} />
      <AboutMe />
      <ContactForm />
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
