"use client";

import { motion } from "framer-motion";

const skills = [
  { group: "Languages", items: ["Python", "SQL", "R", "TypeScript"] },
  { group: "ML / DL", items: ["PyTorch", "scikit-learn", "XGBoost", "Transformers"] },
  { group: "Data & Viz", items: ["Pandas", "Tableau", "D3.js", "Plotly"] },
  { group: "Tools", items: ["Git", "Docker", "AWS", "HuggingFace"] },
];

export default function About() {
  return (
    <section id="about" className="newsprint section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* LEFT — narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold tracking-[0.3em] text-gold">ABOUT</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold text-ink md:text-5xl">
              Born curious. <br />
              Trained as a data scientist.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
              <p>
                I&apos;m a Master&apos;s candidate in Data Science at the{" "}
                <span className="font-semibold text-husky">University of Washington</span>,
                where I&apos;m learning to turn messy real-world data into clear,
                useful decisions.
              </p>
              <p>
                Before grad school, I built a creative-goods venture called{" "}
                <span className="font-semibold text-husky">BriskStarter</span> and
                shipped a deep-learning news recommender that hit{" "}
                <span className="font-semibold text-gold-700">90.77% Top-50 accuracy</span>{" "}
                on 1.1M real clicks. I keep both sides of my brain busy.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me hiking around the PNW,
                making crafts, or planning the next train trip.
              </p>
            </div>
          </motion.div>

          {/* RIGHT — skill grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((s) => (
              <div
                key={s.group}
                className="rounded-xl border border-stone/15 bg-white/70 p-5 backdrop-blur-sm transition-shadow hover:shadow-md"
              >
                <p className="mb-3 text-[10px] font-bold tracking-widest text-husky">
                  {s.group.toUpperCase()}
                </p>
                <ul className="space-y-1.5 text-sm text-ink/80">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-gold" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
