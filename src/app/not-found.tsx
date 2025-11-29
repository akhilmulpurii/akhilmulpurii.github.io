"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const NotFoundShader = dynamic(() => import("@/components/ui/not-found-shader"), {
  ssr: false,
});

export default function NotFound() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0f0a06] text-[#f6dfc3] font-mono">
      {/* Background Shader */}
      <div className="absolute inset-0 opacity-60">
        <NotFoundShader />
      </div>

      {/* Overlay Noise/Texture */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content Grid */}
      <div className="relative z-10 h-full w-full p-6 md:p-12 flex flex-col justify-between">
        {/* Top Bar */}
        <div className="flex justify-between items-start uppercase text-xs tracking-widest opacity-70">
          <div className="flex flex-col gap-1">
            <span>System // Error</span>
            <span className="text-[#f4a261]">ERR_VOID_0x04</span>
          </div>
          <div className="text-right">
            <span>{new Date().toISOString().split("T")[0]}</span>
            <br />
            <span>Unknown_Sector</span>
          </div>
        </div>

        {/* Center Mass */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative inline-block"
          >
            {/* Main 404 */}
            <h1 className="font-anton text-[20vw] leading-[0.8] text-transparent stroke-text select-none mix-blend-difference"
                style={{ WebkitTextStroke: "2px #f4a261" }}>
              404
            </h1>
            
            {/* Glitch/Echo effect */}
            <h1 className="absolute top-0 left-0 font-anton text-[20vw] leading-[0.8] text-[#f4a261] opacity-10 blur-sm select-none pointer-events-none animate-pulse">
              404
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 flex flex-col items-center gap-6"
          >
            <div className="h-px w-24 bg-[#f4a261]" />
            <p className="text-sm md:text-base uppercase tracking-widest max-w-md">
              The coordinates you entered lead to a void. 
              <br className="hidden md:block" />
              This reality does not exist.
            </p>

            <Link
              href="/"
              className="group relative inline-flex items-center gap-4 px-8 py-4 border border-[#f4a261]/40 bg-[#0f0a06]/50 backdrop-blur-sm overflow-hidden hover:border-[#f4a261] transition-colors duration-300"
            >
              <span className="absolute inset-0 bg-[#f4a261] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              
              <span className="relative z-10 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] group-hover:text-[#0f0a06] transition-colors">
                <span>Initiate Return</span>
                <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-end text-[10px] uppercase tracking-widest opacity-50">
          <span>Memory_Dump: 0%</span>
          <span>Status: Critical</span>
        </div>
      </div>
    </div>
  );
}

