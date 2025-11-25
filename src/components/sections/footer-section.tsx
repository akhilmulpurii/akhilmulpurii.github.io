"use client";

import Link from "next/link";
import { DIcons } from "dicons";

const socials = [
  { href: "mailto:mulpuriakhil@icloud.com", label: "Email", icon: DIcons.Mail },
  { href: "https://x.com/FartVader02", label: "X", icon: DIcons.X },
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

const iconButton =
  "inline-flex h-11 w-11 items-center justify-center text-[#f7f5ef] transition-colors duration-150 hover:text-[#f4a261] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4a261]/70";

export function FooterSection() {
  return (
    <footer className="relative isolate w-full overflow-hidden bg-[#0f0a06] px-4 py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 18%, rgba(244,162,97,0.12), transparent 30%), radial-gradient(circle at 82% 12%, rgba(231,111,81,0.12), transparent 30%), radial-gradient(circle at 52% 88%, rgba(255,214,170,0.1), transparent 40%)",
          backgroundColor: "#0f0a06",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,214,170,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,214,170,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(circle at 50% 42%, rgba(0,0,0,0.26), transparent 68%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 42%, rgba(0,0,0,0.26), transparent 68%)",
        }}
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="relative w-full">
          <div className="flex flex-col gap-3 text-center text-[#f7f5ef] sm:text-left">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f7f5ef]">
              Guiding Principle
            </span>
            <p className="text-xl font-semibold leading-relaxed text-[#f7f5ef] sm:text-2xl">
              “कर्मण्ये वाधिकारस्ते मा फलेषु कदाचन | मा कर्मफलहेतु र्भूर्मा ते
              सङ्गो ऽस्त्वकर्मणि ||”
            </p>
            <p className="text-sm leading-7 text-[#f7f5ef]/80 sm:text-base">
              “You have control over your actions alone, never over their
              fruits. Live not for the fruits of action, nor attach yourself to
              inaction.” — Bhagavad Gita 2.47
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {socials.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className={iconButton}
            >
              <Icon className="h-5 w-5 " />
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-2 text-xs text-[#f5f1e8]/80">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()}</span>
            <span className="text-[#f5f1e8]">Akhil Mulpuri</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
