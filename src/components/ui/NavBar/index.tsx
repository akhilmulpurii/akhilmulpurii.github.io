"use client";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import { IconMenu3, IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";

const FramerLink = motion(Link);

// Define the type for a "standard" link
interface StandardNavLinkType {
  title: string;
  link: string; // Required for "standard"
  type: "standard"; // Must be "standard"
  links?: never; // Not allowed for "standard"
}

// Define the type for a "special" link
interface SpecialNavLinkType {
  title: string;
  link: string; // Not allowed for "special"
  type: "special"; // Must be "special"
  links: string[]; // Required for "special"
}

// Union type for NavLinkType
export type NavLinkType = StandardNavLinkType | SpecialNavLinkType;

// Array of NavLinkType
export type NavLinksType = NavLinkType[];

const navLinks: NavLinksType = [
  {
    title: "Home",
    link: "/",
    type: "standard",
  },
  {
    title: "Projects",
    link: "/projects",
    type: "standard",
  },
  {
    title: "Blog",
    link: "/blog",
    type: "standard",
  },
  {
    title: "Contact",
    link: "/contact",
    type: "standard",
  },
  // {
  //   title: "Social",
  //   type: "special",
  //   links: [],
  // },
];

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
  const [open, setOpen] = useState(false);

  const toggleClick = () => setOpen((o) => !o);

  return (
    <div
      className={`flex w-full py-6 px-12 flex-col border-b-[1px] border-b-border  transition-all duration-500 overflow-hidden ${
        open ? "h-[70vh]" : "h-[72px]"
      } `}
    >
      <nav className="flex w-full justify-between items-center ">
        <Link href="/">
          <Image
            decoding="async"
            width={64}
            height={32}
            src="/images/logos/logo.svg"
            alt=""
          />
        </Link>
        {open ? (
          <IconX onClick={toggleClick} className="cursor-pointer select-none" />
        ) : (
          <IconMenu3
            onClick={toggleClick}
            className="cursor-pointer select-none"
          />
        )}
      </nav>
      <NavBarExtended open={open} />
    </div>
  );
};

interface NavBarExtendedProps {
  open: boolean;
}

const NavBarExtended: FunctionComponent<NavBarExtendedProps> = ({
  open,
}: {
  open: boolean;
}) => {
  if (!open) return null;
  return (
    <div className="w-full h-full flex flex-col py-10 items-start flex-1 flex-nowrap gap-5">
      {navLinks.map(({ title, link }, index) => (
        <NavBarItem key={index} title={title} link={link} number={index + 1} />
      ))}
    </div>
  );
};

interface NavBarItemProps {
  title: string;
  number: number;
  link: string;
}

const NavBarItem: FunctionComponent<NavBarItemProps> = ({
  title,
  number,
  link,
}) => (
  <FramerLink
    href={link}
    initial={{ opacity: 0, x: -200 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: number * 0.2, ease: "circInOut" }}
    className={`relative content-start justify-start items-start cursor-pointer flex gap-4 p-2 border-b-[1px] border-b-border w-full group`}
  >
    <div className="outline-none flex flex-col justify-start shrink-0">
      <p className="text-primary text-sm opacity-80">0{number}</p>
    </div>
    <div className="outline-none flex flex-col justify-start shrink-0">
      <h2 className="text-primary text-6xl font-semibold">{title}</h2>
    </div>
    <div
      className="bg-primary transform-none bottom-0 flex h-[2px] left-0 overflow-visible absolute w-0 z-10 group-hover:w-full transition-all duration-500"
      style={{ transformOrigin: "50% 50% 0px" }}
    ></div>
  </FramerLink>
);

export default NavBar;
