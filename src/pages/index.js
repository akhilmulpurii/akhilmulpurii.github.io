import * as React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import MinimalCardSection from "@/components/MinimalCardSection";
import { attributes } from "../../content/home.md";
import GridHeroSection from "@/components/GridHeroSection/GridHeroSection";

const IndexPage = ({ staticContent = [] }) => {
  return (
    <main>
      <GridHeroSection />
      <Footer />
    </main>
  );
};

export async function getStaticProps() {
  return {
    props: {
      staticContent: attributes.content,
    },
  };
}

export default IndexPage;
