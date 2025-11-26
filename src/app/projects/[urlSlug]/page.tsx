import Image from "next/image";
import { notFound } from "next/navigation";

import projects, { type Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

interface ProjectPageProps {
  params: Promise<{ urlSlug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    urlSlug: project.urlSlug,
  }));
}

const formatLink = (label: string, href?: string) =>
  href
    ? {
        label,
        href,
      }
    : null;

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { urlSlug } = await params;
  const project = projects.find((p) => p.urlSlug === urlSlug);

  if (!project) {
    notFound();
  }

  const links = [
    formatLink("Website", project?.web_url),
    formatLink("App Store", project?.appstore_url),
    formatLink("Play Store", project?.playstore_url),
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <div className="min-h-screen bg-[#0f0a06] text-[#f6dfc3]">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-12 md:py-16">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-8">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.35em] text-[#f4a261]/80">
              {project.organizaton}
            </p>
            <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
              {project.title}
            </h1>
          </div>
          <p className="max-w-3xl text-base text-[#f3dfbe]/80">
            {project.description || project.short_description}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#f3dfbe]/80">
            <span className="rounded-full bg-[#1a110b] px-3 py-1 text-[#f4a261] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              {project.year}
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              {project.platform}
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              {project.technologies.join(" · ")}
            </span>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#f4a261]/40 px-3 py-1 text-[#f4a261] transition hover:border-[#f4a261]/80 hover:bg-[#f4a261]/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        </header>

        {project.images?.[0] ? (
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1a110b] shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
            <Image
              src={project.images[0]}
              alt={project.title}
              width={1440}
              height={810}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        ) : null}

        <section className="flex flex-col gap-8">
          {project.sections?.map((section) => (
            <div
              key={section.heading}
              className="grid items-center gap-6 rounded-2xl border border-white/10 bg-[#120c08]/70 p-6 shadow-[0_14px_45px_rgba(0,0,0,0.4)] md:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-[#f7d7a3]">
                  {section.heading}
                </h2>
                <p className="text-base text-[#f3dfbe]/75">{section.caption}</p>
              </div>
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0f0a06]">
                <Image
                  src={section.image}
                  alt={section.heading}
                  width={960}
                  height={640}
                  className={cn("h-full w-full object-cover")}
                />
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
