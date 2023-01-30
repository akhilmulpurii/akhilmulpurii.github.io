import * as React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import QuickViewSection from "../components/QuickViewSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";

// markup
const IndexPage = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <QuickViewSection />
      <AboutMe />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default IndexPage;
