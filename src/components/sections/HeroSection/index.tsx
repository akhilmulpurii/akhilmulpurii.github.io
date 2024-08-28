"use client";
import { useAnimation, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const FramerLink = motion(Link);

interface HeroSectionProps {}

const links = [
  {
    title: "Resume",
    href: "/resume",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/sai-akhil-mulpuri/",
  },
  {
    title: "GitHub",
    href: "https://github.com/akhilmulpurii",
  },
];

const HeroSection: React.FunctionComponent<HeroSectionProps> = () => {
  const titleControls = useAnimation();
  const captionControls = useAnimation();
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
        x: -100 * progress,
        opacity: 1 - progress,
      });

      // Animate the header navigation position
      captionControls.start({
        x: 100 * progress,
        opacity: 1 - progress,
      });
    }
  }, [scrollY, captionControls, titleControls]);

  return (
    <section className="pt-10 md:pt-20">
      <div className="flex items-start flex-col md:flex-row flex-nowrap justify-between gap-8 pb-2 w-full">
        <motion.h1
          animate={titleControls}
          initial={{ opacity: 0, x: -100 }}
          className="text-4xl md:text-6xl lg:text-8xl flex flex-[2] text-nowrap font-semibold text-primary"
        >
          Akhil Mulpuri.
          <br />
          UI Developer
        </motion.h1>
        <div className="flex flex-col gap-4">
          <motion.h2
            animate={captionControls}
            initial={{ opacity: 0, x: 100 }}
            className="text-[14px] md:text-[18px] lg:text-[28px] max-w-lg flex flex-[1] font-semibold text-primary"
          >
            I craft seamless digital experiences that blend visual elegance with
            intuitive functionality, ensuring every user interaction is smooth
            and satisfying.
          </motion.h2>
          <div className="flex flex-row gap-4">
            {links.map((link, index) => (
              <FramerLink
                animate={captionControls}
                initial={{ opacity: 0, x: 100 * (index + 1) }}
                key={link.title}
                href={link.href}
                className=" text-sm text-primary font-medium py-1 px-3 rounded-lg border border-primary hover:bg-slate-100 hover:border-slate-400 cursor-pointer transition-colors duration-300"
              >
                {link.title}
              </FramerLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
