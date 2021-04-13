import * as React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import "../main.css";
import QuickViewSection from "../components/QuickViewSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import { Helmet } from "react-helmet";

// markup
const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Akhil Mulpuri</title>
      </Helmet>
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
