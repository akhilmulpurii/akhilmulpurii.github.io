"use client";

import { motion } from "framer-motion";

const skills = [
  "React & Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Framer Motion",
  "PostgreSQL",
  "GraphQL",
  "System Design",
];

export default function Codex() {
  return (
    <section id="about" className="py-32 px-6 relative z-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/20 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Lore Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-glow-subtle">
            The Codex
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              <span className="text-primary font-bold text-xl">I. ORIGIN</span>
              <br />
              Forged in the fires of curiosity, I began my journey as a seeker of digital truths. My path has led me through the intricate labyrinths of backend logic and the vast plains of frontend artistry.
            </p>
            <p>
              <span className="text-primary font-bold text-xl">II. MISSION</span>
              <br />
              To craft experiences that transcend the screen. I believe software should not merely function; it should enchant, engage, and inspire. Every line of code is a rune, every component a spell.
            </p>
          </div>
        </motion.div>

        {/* Abilities Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <h3 className="text-2xl font-display font-bold mb-8 text-center text-foreground">
              Known Abilities
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all border border-transparent hover:border-primary/20 hover:shadow-[0_0_15px_rgba(197,160,89,0.2)] group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_var(--color-primary)] group-hover:shadow-[0_0_10px_var(--color-primary)] transition-shadow" />
                  <span className="text-sm tracking-wide text-foreground/80 group-hover:text-foreground transition-colors">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
