"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "1.1M+", label: "USER CLICKS MODELED", accent: false },
  { value: "90.77%", label: "TOP-50 ACCURACY", accent: false },
  { value: "8", label: "PROVINCES EXPLORED", accent: true },
  { value: "1", label: "CREATIVE VENTURE FOUNDED", accent: false },
];

export default function Stats() {
  return (
    <section className="border-y border-stone/10 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4 md:px-12">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div
              className={`font-display text-4xl font-extrabold md:text-5xl ${
                s.accent ? "text-gold" : "text-husky"
              }`}
            >
              {s.value}
            </div>
            <div className="mt-1 text-xs font-semibold tracking-widest text-stone">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
