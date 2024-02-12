import * as React from "react";
import { attributes } from "../../content/home.md";
import Sidebar from "@/widgets/Sidebar";
import PortfolioHero from "@/widgets/PortfolioHero";

const IndexPage = ({ staticContent = [] }) => {
  return (
    <Sidebar>
      <PortfolioHero />
      <div style={{ height: "900vh" }} />
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
