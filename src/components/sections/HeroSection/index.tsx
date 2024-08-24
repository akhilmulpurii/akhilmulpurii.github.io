"use client";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Libre_Baskerville, Bricolage_Grotesque } from "next/font/google";
import { motion } from "framer-motion";
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
  return (
    <AuroraBackground>
      <motion.h1
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className={clsx(
          "text-6xl text-center z-10",
          BricolageGrotesque.className
        )}
      >
        Building the <span className="text-primary">Future</span>
      </motion.h1>
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
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
