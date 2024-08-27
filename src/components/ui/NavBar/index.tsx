"use client";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, ReactElement, useState } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconFileTypePdf,
  IconMenu3,
  IconX,
} from "@tabler/icons-react";
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
  link?: never; // Not allowed for "special"
  type: "special"; // Must be "special"
  links: SocialLinksType[]; // Required for "special"
}

type SocialLinksType = {
  Icon: () => JSX.Element;
  href: string;
};

// Union type for NavLinkType
type NavLinkType = StandardNavLinkType | SpecialNavLinkType;

// Array of NavLinkType
type NavLinksType = NavLinkType[];

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
  {
    title: "Social",
    type: "special",
    links: [
      {
        Icon: () => <IconFileTypePdf className="h-full w-full text-primary" />,
        href: "/resume",
      },
      {
        Icon: () => <IconBrandLinkedin className="h-full w-full " />,
        href: "https://www.linkedin.com/in/sai-akhil-mulpuri/",
      },
      {
        Icon: () => <IconBrandX className="h-full w-full " />,
        href: "https://x.com/FartVader02",
      },
      {
        Icon: () => <IconBrandGithub className="h-full w-full " />,
        href: "https://github.com/akhilmulpurii",
      },
    ],
  },
];

interface NavBarProps {}

const NavBar: FunctionComponent<NavBarProps> = () => {
  const [open, setOpen] = useState(false);

  const toggleClick = () => setOpen((o) => !o);

  return (
    <div
      className={`absolute top-0 z-20 bg-white flex w-full py-6 px-12 flex-col border-b-[1px] border-b-border  transition-all duration-500 overflow-hidden ${
        open ? "h-[90vh]" : "h-[72px]"
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
      {navLinks.map(({ title, link, links }, index) => (
        <NavBarItem
          key={index}
          title={title}
          link={link}
          number={index + 1}
          links={links}
        />
      ))}
    </div>
  );
};

interface NavBarItemProps {
  title: string;
  number: number;
  link?: string;
  links?: SocialLinksType[];
}

const NavBarItem: FunctionComponent<NavBarItemProps> = ({
  title,
  number,
  link,
  links,
}) => (
  <FramerLink
    href={link ?? "#"}
    initial={{ opacity: 0, x: -200 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: number * 0.2, ease: "circInOut" }}
    className={`relative content-start justify-start items-start cursor-pointer flex gap-4 p-2 pb-6 border-b-[1px] border-b-border w-full group`}
  >
    <div className="outline-none flex flex-col justify-start shrink-0">
      <p className="text-primary text-sm opacity-80">0{number}</p>
    </div>
    <div className="outline-none flex items-center justify-start shrink-0">
      <h2 className="text-primary text-6xl font-semibold">{title}</h2>
      {links?.length ? <SocialLinkSection links={links} /> : null}
    </div>
    <div
      className="bg-primary transform-none bottom-0 flex h-[2px] left-0 overflow-visible absolute w-0 z-10 group-hover:w-full transition-all duration-500"
      style={{ transformOrigin: "50% 50% 0px" }}
    ></div>
  </FramerLink>
);

interface SocialLinkSectionProps {
  links: SocialLinksType[];
}

const SocialLinkSection: FunctionComponent<SocialLinkSectionProps> = ({
  links,
}) => {
  return (
    <div className="flex items-center gap-3">
      <hr className="w-[1px] bg-border h-16 ml-6 mr-4" />
      {links.map(({ href, Icon }) => (
        <Link
          href={href}
          className="bg-slate-100 w-14 h-14 p-3 rounded-full hover:border-2 hover:border-slate-200 transition-all ease-linear duration-75"
          key={href}
        >
          <Icon />
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
