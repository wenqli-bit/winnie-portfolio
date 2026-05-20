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
              Hi, I&apos;m Winnie. <br />
              Two sides, same brain.
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
              <p>
                I grew up in China splitting my time between two things that feel
                very different from the outside but identical from the inside:{" "}
                <span className="font-semibold text-husky">making sense of patterns</span>{" "}
                (in data, in human behavior, in stories) and{" "}
                <span className="font-semibold text-husky">making things with my hands</span>{" "}
                (crafts, exhibitions, the occasional bracelet).
              </p>
              <p>
                On the data side, I&apos;m a Master&apos;s candidate in Data Science at the{" "}
                <span className="font-semibold text-husky">University of Washington</span>.
                My favorite project so far was training a deep-learning news recommender
                on 1.1M real user clicks — wrangling messy clickstreams, fighting
                over-fitting at 3am, and finally watching Multi-Head Attention lift
                Top-50 accuracy to{" "}
                <span className="font-semibold text-gold-700">90.77%</span>. I love
                the moment when a model finally clicks.
              </p>
              <p>
                On the maker side, I founded a campus venture called{" "}
                <span className="font-semibold text-husky">BriskStarter</span> —
                we organize creative competitions, run pop-up exhibitions, and
                ship handmade goods. It started as a hobby and turned into a real
                team of six.
              </p>
              <p>
                I&apos;ve also been an aerobic-dance competitor, a campus radio host,
                and a serial volunteer. Now I&apos;m in Seattle. Catch me hiking
                around Mt. Rainier on weekends.
              </p>
              <p className="text-base italic text-stone">
                — Currently open to <span className="font-semibold not-italic text-husky">Summer 2026 Data Science / Data Analyst roles</span> in the US.
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
