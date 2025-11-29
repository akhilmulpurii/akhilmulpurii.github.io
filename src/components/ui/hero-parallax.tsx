"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";

export interface ProductItem {
  title: string;
  link: string;
  thumbnail: string;
  logo?: string;
  shortDescription?: string;
  technologies?: string[];
  year?: string;
  platform?: string;
}

export const HeroParallax = ({ products }: { products: ProductItem[] }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="relative flex h-[300vh] flex-col self-auto overflow-hidden bg-[#0a0705] py-40 antialiased text-[#f7f5ef] [perspective:1000px] [transform-style:preserve-3d]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(244,162,97,0.12), transparent 32%), radial-gradient(circle at 80% 10%, rgba(231,111,81,0.1), transparent 30%), radial-gradient(circle at 50% 85%, rgba(255,214,170,0.1), transparent 40%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,214,170,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,214,170,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(circle at 50% 42%, rgba(0,0,0,0.32), transparent 68%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 42%, rgba(0,0,0,0.32), transparent 68%)",
        }}
      />
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="z-[100000] relative left-0 top-0 mx-auto w-full max-w-6xl px-4 py-14 text-center md:py-20">
      <div className="relative inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#f0cfa2] shadow-[0_15px_60px_rgba(0,0,0,0.35)] backdrop-blur mb-4">
        Case studies
        <span className="inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-[#f4a261] shadow-[0_0_0_8px_rgba(244,162,97,0.18)]" />
      </div>
      <h1 className="text-3xl font-black tracking-tight text-[#f7d7a3] sm:text-4xl md:text-5xl drop-shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
        Shipping immersive experiences
      </h1>
      <p className="mt-4 mx-auto max-w-3xl text-sm leading-relaxed text-[#f3dfbe]/78 sm:text-base">
        Motion-led narratives, measurable outcomes, and delivery that respects
        craft and timelines.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: ProductItem;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <a
        href={product.link}
        className="block relative h-full w-full overflow-hidden bg-neutral-900"
      >
        {/* Image Layer */}
        <img
          src={product.thumbnail}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover/product:scale-110 group-hover/product:grayscale-[100%] group-hover/product:contrast-125"
          height="600"
          width="600"
          alt={product.title}
        />

        {/* Artistic Overlays */}
        <div className="absolute inset-0 bg-[#f4a261] mix-blend-multiply opacity-0 transition-opacity duration-500 group-hover/product:opacity-40" />
        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover/product:opacity-100" />

        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-0 group-hover/product:opacity-20 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Abstract Logo Watermark (Background) */}
        {product.logo && (
          <div className="absolute -bottom-10 -right-10 h-64 w-64 opacity-0 rotate-12 transition-all duration-700 ease-out group-hover/product:opacity-10 group-hover/product:rotate-0 group-hover/product:scale-110 pointer-events-none mix-blend-screen">
            <img
              src={product.logo}
              alt=""
              className="h-full w-full object-contain grayscale invert"
            />
          </div>
        )}

        {/* Content Layout - Editorial/Gallery Style */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between">
          {/* Top Meta: Logo & Platform */}
          <div className="flex justify-between items-start">
            {/* Logo in Top Left */}
            <div className="h-8 w-auto max-w-[120px] opacity-0 -translate-y-4 transition-all duration-500 group-hover/product:opacity-100 group-hover/product:translate-y-0">
              {product.logo && (
                <img
                  src={product.logo}
                  alt=""
                  className="h-full w-full object-contain grayscale contrast-125 brightness-125"
                />
              )}
            </div>

            {/* Platform - Vertical */}
            <span
              className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/60 opacity-0 -translate-y-4 transition-all duration-500 delay-100 group-hover/product:opacity-100 group-hover/product:translate-y-0"
              style={{ writingMode: "vertical-rl" }}
            >
              {product.platform}
            </span>
          </div>

          {/* Center/Bottom: Title & Description */}
          <div className="relative z-10">
            {/* Animated Line */}
            <div className="h-px w-0 bg-white/40 mb-4 transition-all duration-700 ease-out group-hover/product:w-full opacity-40" />

            <div className="flex items-baseline justify-between gap-4 translate-y-8 opacity-0 transition-all duration-500 group-hover/product:translate-y-0 group-hover/product:opacity-100">
              <h2 className="text-3xl font-black text-white tracking-tighter uppercase mix-blend-difference">
                {product.title}
              </h2>
              <span className="font-mono text-[10px] text-[#f4a261] tracking-[0.2em]">
                {product.year}
              </span>
            </div>

            <div className="flex items-end justify-between mt-3 translate-y-8 opacity-0 transition-all duration-500 delay-75 group-hover/product:translate-y-0 group-hover/product:opacity-100">
              <p className="text-xs text-white/70 font-light leading-relaxed max-w-[75%] line-clamp-2">
                {product.shortDescription}
              </p>

              {/* Minimal Arrow Link */}
              <div className="h-8 w-8 shrink-0 rounded-full border border-white/20 flex items-center justify-center group-hover/product:bg-white group-hover/product:text-black transition-colors duration-300">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="-rotate-45"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};
