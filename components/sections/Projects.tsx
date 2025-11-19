"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-glow-subtle">
            Featured Works
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full opacity-50" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative glass-panel rounded-xl overflow-hidden h-full flex flex-col transition-transform duration-500 group-hover:-translate-y-2">
                {/* Image Placeholder */}
                <div className="h-64 bg-muted/50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  {/* In a real app, use Next.js Image here */}
                  <div className="w-full h-full bg-secondary/30 flex items-center justify-center text-muted-foreground">
                    [Project Image: {project.title}]
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-display font-bold mb-3 text-primary group-hover:text-glow-subtle transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 bg-white/5 text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 mt-auto">
                    <Link
                      href={project.link}
                      target="_blank"
                      className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" /> Code
                    </Link>
                    <Link
                      href={project.link}
                      target="_blank"
                      className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
