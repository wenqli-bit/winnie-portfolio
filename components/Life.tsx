"use client";

import { motion } from "framer-motion";

const cards = [
  {
    tag: "FOUNDER · 2022 – PRESENT",
    title: "BriskStarter",
    body: [
      "What started as me making things on weekends",
      "turned into a six-person team running",
      "creative competitions and campus exhibitions.",
    ],
    extra: "“Make designers’ ideas come alive.”",
    bg: "bg-husky text-white",
    tilt: "tilt-left",
    tagColor: "text-gold",
  },
  {
    tag: "TRAVELLER · 8 PROVINCES",
    title: "Places I’ve fallen in love with",
    body: [
      "Horseback in Inner Mongolia · Kayaking in",
      "Guizhou · Hanfu in Luoyang · Lakes of",
      "Sichuan · Quiet trails in Hebei.",
    ],
    extra: "Next stop: Seattle 🐾",
    bg: "bg-white border-2 border-gold text-ink",
    tilt: "tilt-right",
    tagColor: "text-husky",
  },
  {
    tag: "THINGS THAT SHAPED ME",
    title: "Many lives, one me",
    body: [
      "Aerobic-dance competitor (city finalist)",
      "Campus radio host · Repeat volunteer",
      "Team captain, group-project survivor",
    ],
    bg: "bg-gold text-husky-deep",
    tilt: "tilt-slight",
    tagColor: "text-husky-deep",
  },
  {
    tag: "NOW",
    title: "This week, I'm...",
    body: [
      "📚 Finishing my MS at UW",
      "🏔 Planning a Mt. Rainier hike",
      "🧶 Crafting something tiny and ridiculous",
      "☕ Open to coffee chats — say hi!",
    ],
    bg: "bg-white border border-ink text-ink",
    tilt: "tilt-right",
    tagColor: "text-husky",
  },
];

export default function Life() {
  return (
    <section id="life" className="newsprint section-pad">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold tracking-[0.3em] text-gold">BEYOND THE CODE</p>
        <h2 className="mt-3 font-display text-5xl font-extrabold text-ink">
          The Stories Behind Me
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-stone">
          A portfolio of code is half a person. Here&apos;s the other half — the
          ventures, the trips, the side hobbies, and all the small things that
          turned me into someone who likes both spreadsheets and sewing machines.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${c.tilt} rounded-lg p-6 shadow-xl ${c.bg} transition-transform hover:rotate-0 hover:scale-105`}
            >
              <p className={`text-[10px] font-bold tracking-widest ${c.tagColor}`}>
                ▎{c.tag}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold leading-tight">
                {c.title}
              </h3>
              <div className="mt-4 space-y-1 text-sm opacity-90">
                {c.body.map((b) => (
                  <p key={b}>{b}</p>
                ))}
                {c.extra && (
                  <p className="mt-3 font-bold italic">{c.extra}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
