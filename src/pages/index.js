import * as React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import "../main.css";
import Particles from "react-particles-js";

// markup
const IndexPage = () => {
  return (
    <main>
      <Header />
      <HeroSection />
    </main>
  );
};

export default IndexPage;
