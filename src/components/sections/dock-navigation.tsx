"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { Flame, FolderKanban, Home, Mail } from "lucide-react";

import { Dock } from "@/components/ui/dock-two";

export function DockNavigation() {
  const router = useRouter();

  const scrollToContact = useCallback(() => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
      return;
    }
    router.push("/#contact");
  }, [router]);

  return (
    <Dock
      items={[
        { icon: Home, label: "Home", onClick: () => router.push("/") },
        { icon: FolderKanban, label: "Projects", onClick: () => router.push("/projects") },
        { icon: Mail, label: "Contact", onClick: scrollToContact },
        { icon: Flame, label: "Trending", onClick: () => router.push("/trending") },
      ]}
    />
  );
}
