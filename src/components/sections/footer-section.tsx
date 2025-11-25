"use client";

import Link from "next/link";
import { DIcons } from "dicons";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",

      sections: [
        {
          id: "about",
          name: "About",
          items: [
            { name: "About", href: "/about" },
            { name: "Works", href: "/agency/works" },
            { name: "Pricing", href: "/pricing" },
          ],
        },
        {
          id: "features",
          name: "Features",
          items: [
            { name: "Products", href: "/products" },
            { name: "Agency", href: "/agency" },
            { name: "Dashboard", href: "/dashboard" },
          ],
        },
        {
          id: "products",
          name: "Products",
          items: [
            { name: "DIcons", href: "/products/dicons" },
            { name: "DShapes", href: "/products/dshapes" },
            { name: "Graaadients", href: "/products/graaadients" },
          ],
        },
        {
          id: "designs",
          name: "Designs",
          items: [
            { name: "Design", href: "/designs" },
            { name: "Components", href: "/components" },
            { name: "Blogs", href: "/blogs" },
          ],
        },
        {
          id: "other",
          name: "Others",
          items: [
            { name: "Graphic", href: "/graphic" },
            { name: "3D Icons", href: "/products/3dicons" },
            { name: "Colors", href: "/products/colors/generate" },
          ],
        },
        {
          id: "company",
          name: "Company",
          items: [
            { name: "Contact", href: "/contact" },
            { name: "Terms", href: "/terms" },
            { name: "Privacy", href: "/privacy" },
          ],
        },
      ],
    },
  ],
};

const Underline = `hover:-translate-y-1 border border-dotted rounded-xl p-2.5 transition-transform `;

export function FooterSection() {
  return (
    <footer className="border-ali/20 :px-4 mx-auto w-full border-b   border-t  px-2">
      <div className="relative mx-auto grid  max-w-7xl items-center justify-center gap-6 p-10 pb-0 md:flex ">
        {/* Quote Section */}
        <p className="bg-transparent text-center text-xs leading-4 text-primary/60 md:text-left">
          <h1>
            “कर्मण्ये वाधिकारस्ते मा फलेषु कदाचन |<br />
            मा कर्मफलहेतु र्भूर्मा ते सङ्गो ऽस्त्वकर्मणि ||”
          </h1>
          <br />
          <h2>
            Translation: “You have control over your actions alone, never over
            their fruits. Live not for the fruits of action, nor attach yourself
            to inaction.” - Bhagavad Gita (Chapter 2, Verse 47) spoken by Lord
            Krishna to Arjuna.
          </h2>
        </p>
      </div>

      <div className="flex flex-wrap justify-center mt-10 gap-y-6">
        <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-6">
          <Link
            aria-label="Logo"
            href="mailto:mulpuriakhil@icloud.com"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Mail strokeWidth={1.5} className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://x.com/FartVader02"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.X className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://www.instagram.com/geeky_akhil"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Instagram className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://github.com/akhilmulpurii"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.GitGraph className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://www.linkedin.com/in/samulpuri"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.LinkedIn className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Logo"
            href="https://www.youtube.com/@AkhilMulpuri"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.YouTube className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="mx-auto mb-10 mt-10 flex flex-col justify-between text-center text-xs md:max-w-7xl">
        <div className="flex flex-row items-center justify-center gap-1 text-slate-600 dark:text-slate-400">
          <span> © </span>
          <span>{new Date().getFullYear()}</span>
          <span>Made with</span>
          <DIcons.Heart className="text-red-600 mx-1 h-4 w-4 animate-pulse" />
          <span> by </span>
          <span className="hover:text-ali dark:hover:text-ali cursor-pointer text-black dark:text-white">
            <Link
              aria-label="Logo"
              className="font-bold"
              href="https://www.instagram.com/geeky_akhil"
              target="_blank"
            >
              Akhil Mulprui {""}
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
