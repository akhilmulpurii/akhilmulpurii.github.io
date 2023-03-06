import * as React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import MinimalCardSection from "@/components/MinimalCardSection";
import { attributes } from "../../content/home.md";

const IndexPage = ({ staticContent = [] }) => {
  return (
    <main>
      <Header />
      <HeroSection />
      {staticContent.map(
        ({ heading, info, backgroundColor, imageUrl }, index) => (
          <MinimalCardSection
            key={index}
            isTwisted={index % 2 === 0}
            delayAmount={index * 0.2}
            {...{ heading, info, backgroundColor, imageUrl }}
          />
        )
      )}
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
