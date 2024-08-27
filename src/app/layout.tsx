import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  IconBlockquote,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconFileTypePdf,
  IconHome,
  IconMessage2,
  IconTerminal2,
} from "@tabler/icons-react";
import NavBar from "@/components/ui/NavBar";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

const links = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full text-neutral-300" />,
    href: "/",
  },

  {
    title: "Projects",
    icon: <IconTerminal2 className="h-full w-full text-neutral-300" />,
    href: "/projects",
  },
  {
    title: "Blog",
    icon: <IconBlockquote className="h-full w-full text-neutral-300" />,
    href: "/blog",
  },
  {
    title: "Contact",
    icon: <IconMessage2 className="h-full w-full text-neutral-300" />,
    href: "/contact",
  },
  {
    title: "Resume",
    icon: <IconFileTypePdf className="h-full w-full text-neutral-300" />,
    href: "/resume",
  },
  {
    title: "LinkedIn",
    icon: <IconBrandLinkedin className="h-full w-full text-neutral-300" />,
    href: "https://www.linkedin.com/in/sai-akhil-mulpuri/",
  },
  {
    title: "Twitter",
    icon: <IconBrandX className="h-full w-full text-neutral-300" />,
    href: "https://x.com/FartVader02",
  },
  {
    title: "GitHub",
    icon: <IconBrandGithub className="h-full w-full text-neutral-300" />,
    href: "https://github.com/akhilmulpurii",
  },
];

export const metadata: Metadata = {
  title: "Akhil Mulpuri",
  description: "Creative Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "max-w-[1376px] w-full flex flex-col mx-auto py-6 px-12"
        )}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
