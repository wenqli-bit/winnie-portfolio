"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mock data for the demo. Replace this with a real API call to your model.
const headlines = [
  { id: 1, category: "Tech", title: "New AI Breakthroughs", read: "2 min read" },
  { id: 2, category: "Finance", title: "Market Trends This Week", read: "3 min read" },
  { id: 3, category: "Sports", title: "Latest Game Highlights", read: "4 min read" },
  { id: 4, category: "Entertainment", title: "Movie Releases", read: "2 min read" },
  { id: 5, category: "Tech", title: "Chip Industry Updates", read: "3 min read" },
  { id: 6, category: "Finance", title: "Quant Trading Deep Dive", read: "5 min read" },
  { id: 7, category: "Science", title: "Space Mission Recap", read: "4 min read" },
  { id: 8, category: "Travel", title: "Hidden Trails in PNW", read: "3 min read" },
];

// Mock recommendation result. In production, POST to your FastAPI endpoint.
function mockRecommend(selectedIds: number[]) {
  const baseRecs = [
    { title: "AI Industry Annual Report", match: 96 },
    { title: "Quant Trading Strategy Deep Dive", match: 92 },
    { title: "Semiconductor News This Week", match: 88 },
  ];
  // Just so the demo "responds" to selections.
  return baseRecs.slice(0, Math.min(3, Math.max(1, selectedIds.length)));
}

export default function Demo() {
  const [selected, setSelected] = useState<number[]>([1, 2]);
  const recommendations = mockRecommend(selected);

  const toggle = (id: number) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <section id="demo" className="bg-husky-800 section-pad text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* LEFT — header + steps (spans 2 cols) */}
          <div className="lg:col-span-2">
            <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-[10px] font-bold tracking-widest text-gold">
              LIVE · TRY IT
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold md:text-5xl">
              Recommend me something to read.
            </h2>
            <p className="mt-3 max-w-xl text-white/70">
              Pick a few headlines you&apos;d actually click. My LSTM-Attention
              model will guess what else you&apos;d like.
            </p>

            {/* Step 1 */}
            <div className="mt-12">
              <p className="text-xs font-bold tracking-[0.2em] text-gold">
                STEP 1 — PICK 3 TO 5
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                {headlines.map((h) => {
                  const isSel = selected.includes(h.id);
                  return (
                    <button
                      key={h.id}
                      onClick={() => toggle(h.id)}
                      className={`rounded-xl border p-4 text-left transition-all ${
                        isSel
                          ? "border-gold bg-white/10 ring-2 ring-gold/40"
                          : "border-white/15 bg-white/5 hover:border-white/40"
                      }`}
                    >
                      {isSel && (
                        <span className="text-[10px] font-bold text-gold">★ SELECTED</span>
                      )}
                      <p className="mt-1 text-xs text-white/60">{h.category}</p>
                      <p className="mt-1 text-sm font-semibold leading-tight">{h.title}</p>
                      <p className="mt-2 text-[10px] text-white/40">{h.read}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2 */}
            <div className="mt-12">
              <p className="text-xs font-bold tracking-[0.2em] text-gold">
                STEP 2 — TOP RECOMMENDATIONS
              </p>
              <div className="mt-4 space-y-3">
                <AnimatePresence>
                  {recommendations.map((r, i) => (
                    <motion.div
                      key={r.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center justify-between rounded-xl border border-gold/40 bg-gold/10 p-4"
                    >
                      <div>
                        <p className="text-[10px] font-bold text-gold">
                          MATCH · {r.match}%
                        </p>
                        <p className="mt-1 font-semibold">{r.title}</p>
                      </div>
                      <div className="h-2 w-24 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full bg-gold"
                          style={{ width: `${r.match}%` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* RIGHT — under the hood card */}
          <div className="lg:pt-20">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <p className="text-xs font-bold tracking-[0.2em] text-gold">
                UNDER THE HOOD
              </p>
              <dl className="mt-5 space-y-3 text-sm">
                <Row k="Model" v="LSTM + Multi-Head Attention" />
                <Row k="Training data" v="1,112,623 clicks" />
                <Row k="Test accuracy" v="90.77% (Top-50)" />
                <Row k="Inference" v="FastAPI · HuggingFace" />
              </dl>
              <div className="mt-5 border-t border-white/10 pt-4">
                <a
                  href="/projects/news-recommender"
                  className="text-xs italic text-white/60 hover:text-gold"
                >
                  Read the full technical write-up →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-white/60">{k}</dt>
      <dd className="text-right font-semibold text-gold-100">{v}</dd>
    </div>
  );
}
