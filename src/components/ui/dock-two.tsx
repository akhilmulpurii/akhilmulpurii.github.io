"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface DockProps {
  className?: string;
  items: {
    icon: LucideIcon;
    label: string;
    onClick?: () => void;
  }[];
}

interface DockIconButtonProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  className?: string;
}

const floatingAnimation: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-2, 2, -2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1] as const,
    },
  },
};

const DockIconButton = React.forwardRef<HTMLButtonElement, DockIconButtonProps>(
  ({ icon: Icon, label, onClick, className }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={cn(
          "group relative rounded-full p-3",
          "hover:bg-amber-900/30 transition-colors",
          "border border-amber-100/15 bg-[#1a110b]/80 backdrop-blur-md shadow-sm shadow-amber-500/20",
          className
        )}
      >
        <Icon className="h-5 w-5 text-amber-200 drop-shadow-[0_4px_12px_rgba(244,162,97,0.25)]" />
        <span
          className={cn(
            "pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded px-2 py-1 text-xs",
            "bg-[#0f0a06]/95 text-amber-100 shadow-sm shadow-amber-500/30",
            "opacity-0 transition-opacity group-hover:opacity-100"
          )}
        >
          {label}
        </span>
      </motion.button>
    );
  }
);
DockIconButton.displayName = "DockIconButton";

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ items, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "pointer-events-none fixed inset-x-0 bottom-6 flex justify-center px-4",
          "bg-gradient-to-b from-transparent via-transparent to-black/0",
          className
        )}
      >
        <div className="pointer-events-auto relative flex w-full max-w-3xl items-center justify-center rounded-3xl">
          <motion.div
            initial="initial"
            animate="animate"
            variants={floatingAnimation}
            className={cn(
              "flex items-center gap-3 rounded-full border border-amber-100/15 bg-[#0f0a06]/85 p-3 shadow-lg shadow-amber-900/30 backdrop-blur-2xl transition-shadow duration-300"
            )}
          >
            {items.map((item) => (
              <DockIconButton key={item.label} {...item} />
            ))}
          </motion.div>
        </div>
      </div>
    );
  }
);
Dock.displayName = "Dock";

export { Dock };
