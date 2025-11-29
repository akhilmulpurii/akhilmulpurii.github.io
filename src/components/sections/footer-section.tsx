"use client";

import Link from "next/link";
import { DIcons } from "dicons";

const socials = [
  { href: "https://x.com/FartVader02", label: "X", icon: DIcons.X },
  {
    href: "mailto:mulpuriakhil@icloud.com",
    label: "Email",
    icon: DIcons.Mail,
  },
  {
    href: "https://www.instagram.com/geeky_akhil",
    label: "Instagram",
    icon: DIcons.Instagram,
  },
  {
    href: "https://github.com/akhilmulpurii",
    label: "GitHub",
    icon: DIcons.GitGraph,
  },
  {
    href: "https://www.linkedin.com/in/samulpuri",
    label: "LinkedIn",
    icon: DIcons.LinkedIn,
  },
  {
    href: "https://www.youtube.com/@AkhilMulpuri",
    label: "YouTube",
    icon: DIcons.YouTube,
  },
];

export function FooterSection() {
  return (
    <footer className="relative w-full bg-[#0a0705] overflow-hidden px-6 py-24">
      {/* Ambient Background Light */}
      <div className="absolute -top-[300px] right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(244,162,97,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">
          {/* Left: Philosophy (Restored Original Text) */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f4a261] animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">
                Guiding Principle
              </span>
            </div>

            <blockquote className="space-y-6">
              <p className="text-3xl md:text-4xl lg:text-5xl font-rozha leading-tight text-[#f7f5ef]">
                “कर्मण्ये वाधिकारस्ते मा फलेषु कदाचन |{" "}
                <br className="hidden sm:block" />
                मा कर्मफलहेतु र्भूर्मा ते सङ्गो ऽस्त्वकर्मणि ||”
              </p>

              <div className="h-px w-16 bg-[#f4a261]/50" />

              <p className="text-base md:text-lg leading-relaxed text-[#f7f5ef]/70 max-w-xl font-light">
                “You have control over your actions alone, never over their
                fruits. Live not for the fruits of action, nor attach yourself
                to inaction.”
              </p>

              <footer className="font-mono text-xs text-[#f4a261] uppercase tracking-widest">
                — Bhagavad Gita 2.47
              </footer>
            </blockquote>
          </div>

          {/* Right: Modern Dock & Meta */}
          <div className="flex flex-col items-start lg:items-end gap-10 w-full lg:w-auto">
            {/* Socials - Minimal Text Links in Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-4 text-left lg:text-right">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center lg:justify-end gap-2 text-sm font-mono uppercase tracking-widest text-white/50 transition-colors hover:text-[#f4a261]"
                >
                  <span>{social.label}</span>
                  <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 lg:order-first lg:translate-x-2 lg:group-hover:-translate-x-0">
                    ↗
                  </span>
                </Link>
              ))}
            </div>

            <div className="flex flex-col items-start lg:items-end gap-2 text-xs font-mono text-white/30 uppercase tracking-widest w-full lg:w-auto border-t lg:border-t-0 border-white/10 pt-4 lg:pt-0">
              <span>Akhil Mulpuri © {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>

        {/* Giant Background Text (Low Opacity) */}
        <div className="absolute -bottom-20 left-0 select-none pointer-events-none opacity-[0.02]">
          <span className="text-[12rem] font-black text-white leading-none">
            AKHIL
          </span>
        </div>
      </div>
    </footer>
  );
}
