import * as React from "react";
import { attributes } from "../../content/home.md";
import Sidebar from "@/widgets/Sidebar";
import HeroSection from "@/components/HeroSection";

const IndexPage = ({ staticContent = [] }) => {
  return (
    <Sidebar>
      <HeroSection />
      <HeroSection />
      <HeroSection />
      <HeroSection />
    </Sidebar>
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
