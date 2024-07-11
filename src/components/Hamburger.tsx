"use client";

import { SidebarContext } from "@/providers/SidebarProvider";
import { IconMenu2 } from "@tabler/icons-react";
import { useContext } from "react";

const Hamburger = () => {
  const sidebar = useContext(SidebarContext);
  return (
    <button
      onClick={() => sidebar?.setOpen((o) => !o)}
      className="px-4 py-4 w-10 h-10 absolute top-0 left-0"
    >
      <IconMenu2 className="text-gray-600 w-8 h-8" />
    </button>
  );
};

export default Hamburger;
