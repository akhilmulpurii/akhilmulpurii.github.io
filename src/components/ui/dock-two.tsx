"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface DockProps {
  className?: string;
  themeColor?: string; // e.g. "#f4a261"
  backgroundColor?: string; // e.g. "rgba(15, 10, 6, 0.85)"
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
  themeColor?: string;
  backgroundColor?: string;
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
  (
    {
      icon: Icon,
      label,
      onClick,
      className,
      themeColor = "#f4a261",
      backgroundColor = "rgba(26, 17, 11, 0.8)",
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.1, y: -2, backgroundColor: `${themeColor}33` }} // 33 is ~20% opacity
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={cn(
          "group relative rounded-full p-3",
          "transition-colors",
          "backdrop-blur-md shadow-sm",
          className
        )}
        style={{
          borderColor: `${themeColor}26`, // 15% opacity
          backgroundColor: backgroundColor,
          boxShadow: `0 1px 2px 0 ${themeColor}33`,
        }}
      >
        <Icon
          className="h-5 w-5"
          style={{
            color: themeColor, // Use theme color for icon
            filter: `drop-shadow(0 4px 12px ${themeColor}40)`,
          }}
        />
        <span
          className={cn(
            "pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded px-2 py-1 text-xs",
            "bg-[#0f0a06]/95 text-amber-100 shadow-sm",
            "opacity-0 transition-opacity group-hover:opacity-100"
          )}
          style={{
            boxShadow: `0 1px 2px 0 ${themeColor}4d`,
          }}
        >
          {label}
        </span>
      </motion.button>
    );
  }
);
DockIconButton.displayName = "DockIconButton";

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      items,
      className,
      themeColor = "#f4a261",
      backgroundColor = "rgba(15, 10, 6, 0.85)",
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "pointer-events-none fixed inset-x-0 bottom-6 flex justify-center px-4 z-50",
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
              "flex items-center gap-3 rounded-full p-3 backdrop-blur-2xl transition-shadow duration-300"
            )}
            style={{
              borderColor: `${themeColor}26`, // 15% opacity
              backgroundColor: backgroundColor,
              boxShadow: `0 10px 15px -3px ${themeColor}4d`,
              borderWidth: "1px",
            }}
          >
            {items.map((item) => (
              <DockIconButton
                key={item.label}
                {...item}
                themeColor={themeColor}
                backgroundColor={backgroundColor}
              />
            ))}
          </motion.div>
        </div>
      </div>
    );
  }
);
Dock.displayName = "Dock";

export { Dock };
