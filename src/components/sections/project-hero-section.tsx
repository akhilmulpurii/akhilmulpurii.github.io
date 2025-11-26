"use client";
import { motion } from "framer-motion";
import AnoAI from "@/components/ui/animated-shader-background";
import { cn } from "@/lib/utils";

const ProjectHeroSection = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    }),
  } as const;

  return (
    <div className="relative">
      <div className="relative h-screen w-screen flex items-center z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#f9e7c8] to-[#f0cfa2]">
                Projects
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-[#f6dfc3]/70 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              A collection of my work showcasing my skills and creativity in web
              development.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <AnoAI />
      </div>
    </div>
  );
};

export default ProjectHeroSection;
