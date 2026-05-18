"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-husky-800 py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold tracking-[0.3em] text-gold">CONTACT</p>
          <h2 className="mt-3 font-display text-5xl font-extrabold md:text-6xl">
            Let&apos;s build something.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/70">
            Open to Summer 2026 Data Science / Data Analyst roles. Also happy to chat
            about recommender systems, the PNW hiking circuit, or how to start a small
            creative venture.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:wenqli090603@gmail.com" className="btn-gold">
              Email me ↗
            </a>
            <a
              href="https://www.linkedin.com/in/winnie-li1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/wenqli-bit"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
