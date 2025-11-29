"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { Flame, FolderKanban, Home, Mail } from "lucide-react";

import { Dock } from "@/components/ui/dock-two";
import { hexToRgba, getLuminance } from "@/lib/utils";

export function DockNavigation({
  themeColor,
  backgroundColor,
}: {
  themeColor?: string;
  backgroundColor?: string;
}) {
  const router = useRouter();

  const scrollToContact = useCallback(() => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
      return;
    }
    router.push("/#contact");
  }, [router]);

  // Determine Dock Background
  let dockBg;
  if (backgroundColor) {
    const isDark = getLuminance(backgroundColor) < 128;
    // If dark mode: use the background color with opacity
    // If light mode: use white with opacity to keep it clean, or the background color
    // Let's use the background color but ensure it has opacity for glass effect
    dockBg = hexToRgba(backgroundColor, 0.85);
    
    // Correction: If it's light mode, using the exact background color might blend in too much.
    // Let's add a slight shadow or border correction in Dock component, but here just pass the color.
    // Actually, for light mode, a slightly darker or lighter glass is nice.
    // If background is white, dock should probably be off-white or have a border.
    // The Dock component already adds a border based on themeColor.
  }

  return (
    <Dock
      themeColor={themeColor}
      backgroundColor={dockBg}
      items={[
        { icon: Home, label: "Home", onClick: () => router.push("/") },
        {
          icon: FolderKanban,
          label: "Projects",
          onClick: () => router.push("/projects"),
        },
        { icon: Mail, label: "Contact", onClick: scrollToContact },
        {
          icon: Flame,
          label: "Trending",
          onClick: () => router.push("/trending"),
        },
      ]}
    />
  );
}
