"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { memo } from "react";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const ElegantShape = memo(function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.1]",
            "shadow-[0_18px_45px_rgba(240,148,92,0.18)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_42%_46%,rgba(255,214,170,0.28),transparent_68%)]"
          )}
        />
        <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle_at_35%_50%,rgba(247,185,120,0.22),transparent_60%)] blur-[3px]" />
        <motion.div
          aria-hidden
          animate={{ rotate: [-10, 6, -4, 0] }}
          transition={{
            duration: 14,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute inset-[8%] rounded-[999px] bg-gradient-to-br from-[#f6c48f]/35 via-transparent to-[#e76f51]/35"
          style={{ mixBlendMode: "screen" }}
        />
        <div className="absolute inset-[18%] rotate-[12deg] rounded-[999px] bg-gradient-to-r from-[#fce5c6]/18 via-[#f7d7a3]/24 to-transparent backdrop-blur-[1.5px]" />
        <div className="absolute inset-[26%] -rotate-[10deg] rounded-[999px] bg-[conic-gradient(from_200deg_at_50%_50%,rgba(244,162,97,0.12),transparent_60%,rgba(231,111,81,0.18),transparent_90%)]" />
      </motion.div>
    </motion.div>
  );
});

function HeroGeometric({
  badge = "Design Collective",
  title1 = "Elevate Your Digital Vision",
  title2 = "Crafting Exceptional Websites",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0f0a06]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,183,94,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(232,111,62,0.1),transparent_38%),radial-gradient(circle_at_50%_85%,rgba(255,214,170,0.08),transparent_45%)] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-[#f4a261]/[0.22]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-[#e76f51]/[0.22]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-[#d67f4a]/[0.2]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-[#f2c48c]/[0.2]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-[#f08c42]/[0.22]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="relative mb-8 md:mb-12 inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#f0cfa2] shadow-[0_15px_60px_rgba(0,0,0,0.35)] backdrop-blur"
          >
            {badge}
            <span className="inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-[#f4a261] shadow-[0_0_0_8px_rgba(244,162,97,0.18)]" />
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#f9e7c8] to-[#f0cfa2]">
                {title1}
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-[#f4a261] via-[#f7d7a3] to-[#e76f51]"
                )}
              >
                {title2}
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
              Transforming tomorrow with tech-infused narratives, my software
              creates fair and fun experiences for all.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a06] via-transparent to-[#0f0a06]/85 pointer-events-none" />
    </div>
  );
}

export { HeroGeometric };
