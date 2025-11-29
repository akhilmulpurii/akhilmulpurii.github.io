"use client";

import { HeroSection } from "@/components/ui/hero-section-with-smooth-bg-shader";

export default function ContactUsSection() {
  return (
    <HeroSection
      title="Ready to start something bold?"
      highlightText="Let’s talk"
      description="Tell me about the product you want to launch or the experience you want to elevate. I’ll reply quickly with next steps."
      buttonText="Email Akhil"
      onButtonClick={() => {
        window.location.href = "mailto:mulpuriakhil@icloud.com";
      }}
      distortion={0.9}
      speed={0.55}
      veilOpacity="bg-black/45"
      maxWidth="max-w-4xl"
      titleClassName="text-[#f7d7a3] drop-shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
      descriptionClassName="text-[#f3dfbe]/75"
      buttonClassName="bg-[#0f0a06] text-[#f7d7a3] border border-[#f4a261]/40 hover:bg-[#1a100a] hover:border-[#f7d7a3]/50 shadow-[0_14px_40px_rgba(0,0,0,0.45)]"
      className="text-center px-6 py-24"
      minHeightClassName="min-h-[60vh]"
    />
  );
}
