"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/lib/data";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-glow-subtle">
            Begin Your Quest
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to forge something legendary? Send a raven, and let us discuss how we can build the future together.
          </p>

          <div className="flex flex-col items-center gap-8">
            <motion.a
              href="mailto:hello@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold tracking-wide hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(197,160,89,0.3)]"
            >
              <Mail className="w-5 h-5" />
              Send a Message
            </motion.a>

            <div className="flex items-center gap-8 mt-8">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest text-sm"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
