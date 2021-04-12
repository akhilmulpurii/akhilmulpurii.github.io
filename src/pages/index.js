import * as React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import "../main.css";
import QuickViewSection from "../components/QuickViewSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

// markup
const IndexPage = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <QuickViewSection />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default IndexPage;
