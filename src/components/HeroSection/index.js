import * as React from "react";
import { motion } from "framer-motion";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// markup
const HeroSection = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Particles
        className="hero-section-particles"
        id="tsparticles"
        url="/config/particlesjs-config.json"
        init={particlesInit}
        loaded={particlesLoaded}
      />
      Akhil Mulpuri,
      <br />
      UI-UX Developer
    </motion.section>
  );
};

export default HeroSection;
