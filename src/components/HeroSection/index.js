import * as React from "react";
import Particles from "react-tsparticles";
import { motion } from "framer-motion";

// markup
const HeroSection = () => {
  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
      <Particles className="hero-section-particles" />
      Akhil Mulpuri,
      <br />
      UI-UX Developer
    </motion.section>
  );
};

export default HeroSection;
