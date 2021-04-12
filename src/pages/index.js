import * as React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import "../main.css";
import QuickViewSection from "../components/QuickViewSection";
import ContactForm from "../components/ContactForm";

// markup
const IndexPage = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <QuickViewSection />
      <ContactForm />
    </main>
  );
};

export default IndexPage;
