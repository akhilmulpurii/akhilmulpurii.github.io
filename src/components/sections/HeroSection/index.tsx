"use client";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Libre_Baskerville, Bricolage_Grotesque } from "next/font/google";
import { motion, useAnimation, useInView } from "framer-motion";
import { RefObject, useEffect, useRef, useState } from "react";
import clsx from "clsx";

const LibreBaskerville = Libre_Baskerville({
  weight: "400",
  style: "italic",
  display: "swap",
  subsets: ["latin"],
});
const BricolageGrotesque = Bricolage_Grotesque({
  weight: "700",
  display: "swap",
  subsets: ["latin"],
});

interface HeroSectionProps {}

const HeroSection: React.FunctionComponent<HeroSectionProps> = () => {
  const controls = useAnimation();
  const titleControls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  // Handle the scroll event to simulate scrub effect
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setScrollY(scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update the animation based on scroll position
  useEffect(() => {
    // Set trigger points similar to GSAP's start/end trigger
    const startTrigger = 0;
    const endTrigger = window.innerHeight;

    if (scrollY >= startTrigger && scrollY <= endTrigger) {
      const progress = (scrollY - startTrigger) / (endTrigger - startTrigger);

      // Animate the title scale and opacity based on scroll progress
      titleControls.start({
        opacity: 1 - progress,
        scale: 1 - progress * 0.5,
      });

      // Animate the header navigation position
      controls.start({
        x: -400 * progress,
        opacity: 1 - progress * 2,
      });
    }
  }, [scrollY, controls, titleControls]);

  return (
    <AuroraBackground>
      <div className="absolute top-0 left-4">
        <motion.h2
          animate={controls}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className={clsx(
            "text-[21.8vw] hidden lg:block font-extrabold leading-[0.88] text-[#151d1f]",
            BricolageGrotesque.className
          )}
        >
          SAI
          <br />
          AKHIL
          <br />
          MULPURI
        </motion.h2>
      </div>
      <motion.h1
        animate={titleControls}
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className={clsx(
          "text-6xl text-center z-10",
          BricolageGrotesque.className
        )}
      >
        Building the <span className="text-primary">Future</span>
      </motion.h1>
      <motion.h1
        animate={titleControls}
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className={clsx(
          "text-6xl text-center z-10",
          LibreBaskerville.className
        )}
      >
        One Line of Code at a Time
      </motion.h1>
    </AuroraBackground>
  );
};

export default HeroSection;
