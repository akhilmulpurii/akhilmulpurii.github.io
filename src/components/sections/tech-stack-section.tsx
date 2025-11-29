import { LogoCloud } from "@/components/ui/logo-cloud-4";

export default function TechStackSection() {
  return (
    <section className="relative isolate w-full place-content-center overflow-hidden py-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 18%, rgba(244,162,97,0.12), transparent 28%), radial-gradient(circle at 84% 12%, rgba(231,111,81,0.12), transparent 30%), radial-gradient(circle at 52% 88%, rgba(255,214,170,0.12), transparent 38%)",
          backgroundColor: "#0f0a06",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,214,170,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,214,170,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(circle at 50% 42%, rgba(0,0,0,0.26), transparent 68%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 42%, rgba(0,0,0,0.26), transparent 68%)",
        }}
      />

      <div className="relative mx-auto flex w-full flex-col items-center gap-12 text-center">
        <div className="relative inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#f0cfa2] shadow-[0_15px_60px_rgba(0,0,0,0.35)] backdrop-blur">
          Curated Tooling
          <span className="inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-[#f4a261] shadow-[0_0_0_8px_rgba(244,162,97,0.18)]" />
        </div>

        <div>
          <p className="mx-auto max-w-3xl text-base text-[#f6dfc3]/75 md:text-lg">
            A hand-tuned stack for expressive, performant interfaces—built to
            scale motion, storytelling, and reliability without sacrificing
            pace.
          </p>
        </div>
        <LogoCloud logos={logos} />
      </div>
    </section>
  );
}

const logos = [
  // Frontend
  { src: "https://cdn.simpleicons.org/react/ffffff", alt: "React" },
  { src: "https://cdn.simpleicons.org/angular/ffffff", alt: "Angular" },
  { src: "https://cdn.simpleicons.org/typescript/ffffff", alt: "TypeScript" },
  { src: "https://cdn.simpleicons.org/react/ffffff", alt: "React Native" },
  { src: "https://cdn.simpleicons.org/flutter/ffffff", alt: "Flutter" },
  { src: "https://cdn.simpleicons.org/nextdotjs/ffffff", alt: "Next.js" },
  {
    src: "https://cdn.simpleicons.org/tailwindcss/ffffff",
    alt: "Tailwind CSS",
  },

  // Backend & databases
  { src: "https://cdn.simpleicons.org/nodedotjs/ffffff", alt: "Node.js" },
  { src: "https://cdn.simpleicons.org/express/ffffff", alt: "Express" },
  { src: "https://cdn.simpleicons.org/nestjs/ffffff", alt: "NestJS" },
  { src: "https://cdn.simpleicons.org/prisma/ffffff", alt: "Prisma" },
  { src: "https://cdn.simpleicons.org/postgresql/ffffff", alt: "PostgreSQL" },
  { src: "https://cdn.simpleicons.org/mongodb/ffffff", alt: "MongoDB" },
  { src: "https://cdn.simpleicons.org/redis/ffffff", alt: "Redis" },

  // Cloud & DevOps
  { src: "https://svgl.app/library/aws_dark.svg", alt: "AWS" },
  { src: "https://cdn.simpleicons.org/docker/ffffff", alt: "Docker" },
  { src: "https://cdn.simpleicons.org/kubernetes/ffffff", alt: "Kubernetes" },
  { src: "https://cdn.simpleicons.org/terraform/ffffff", alt: "Terraform" },
  { src: "https://cdn.simpleicons.org/vercel/ffffff", alt: "Vercel" },
  { src: "https://cdn.simpleicons.org/netlify/ffffff", alt: "Netlify" },

  // AI & tooling
  { src: "https://cdn.simpleicons.org/openai/ffffff", alt: "OpenAI" },
  { src: "https://cdn.simpleicons.org/anthropic/ffffff", alt: "Claude AI" },
  { src: "https://cdn.simpleicons.org/supabase/ffffff", alt: "Supabase" },
  { src: "https://cdn.simpleicons.org/planetscale/ffffff", alt: "PlanetScale" },

  // Versioning & collaboration
  { src: "https://cdn.simpleicons.org/github/ffffff", alt: "GitHub" },
  { src: "https://cdn.simpleicons.org/gitlab/ffffff", alt: "GitLab" },
  { src: "https://cdn.simpleicons.org/git/ffffff", alt: "Git" },
];
