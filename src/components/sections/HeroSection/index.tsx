"use client";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Libre_Baskerville, Bricolage_Grotesque } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { RefObject, useRef } from "react";
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
  const ref1: RefObject<HTMLHeadingElement> = useRef(null);
  const ref2: RefObject<HTMLHeadingElement> = useRef(null);

  // Adjust `amount` and `once` options
  const inView1 = useInView(ref1, { once: false, amount: "some" });
  const inView2 = useInView(ref2, { once: false, amount: "some" });

  return (
    <AuroraBackground>
      <motion.h1
        ref={ref1}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: inView1 ? 0 : 100, opacity: inView1 ? 1 : 0 }}
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
        ref={ref2}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: inView2 ? 0 : -100, opacity: inView2 ? 1 : 0 }}
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
