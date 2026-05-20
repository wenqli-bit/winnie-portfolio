"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects, categories, type ProjectCategory } from "@/lib/projects";

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const filtered = useMemo(
    () => projects.filter((p) => active === "all" || p.category === active),
    [active]
  );

  const featured = filtered.find((p) => p.featured);
  const others = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-cream section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.3em] text-gold">SELECTED WORK</p>
            <h2 className="mt-3 font-display text-5xl font-extrabold text-ink">
              Projects
            </h2>
            <p className="mt-2 text-stone">
              Two tracks: technical work and creative ventures.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  active === c.key
                    ? "bg-husky text-white shadow-md"
                    : "border border-stone/20 bg-white text-ink hover:border-husky"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <Link
                href={`/projects/${featured.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl bg-husky p-8 text-white transition-all hover:bg-husky-700 hover:shadow-2xl hover:shadow-husky/20"
              >
                <div>
                  <span className="inline-block rounded-full bg-gold px-3 py-1 text-[10px] font-extrabold tracking-wider text-husky-deep">
                    FEATURED - {featured.categoryLabel.toUpperCase()}
                  </span>
                  <h3 className="mt-6 font-display text-4xl font-bold leading-tight">
                    {featured.title}
                  </h3>
                  <p className="mt-3 text-gold-100">{featured.tagline}</p>
                  <p className="mt-6 max-w-xl text-white/70">{featured.summary}</p>
                </div>
                <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {featured.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gold transition-transform group-hover:translate-x-1">
                    Read case study
                  </span>
                </div>
              </Link>
            </motion.div>
          )}

          {others.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
            >
              <Link
                href={`/projects/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone/15 bg-white transition-all hover:-translate-y-1 hover:border-husky hover:shadow-xl"
              >
                {p.cover && (
                  <div className="relative aspect-[16/9] border-b border-stone/10 bg-cream">
                    <Image
                      src={p.cover}
                      alt={`${p.title} preview`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <span className="inline-block rounded-full bg-cream px-3 py-1 text-[10px] font-extrabold tracking-wider text-husky">
                      {p.categoryLabel.toUpperCase()}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-bold text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-stone">{p.tagline}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-cream px-2.5 py-0.5 text-[10px] font-medium text-husky"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-gold transition-transform group-hover:translate-x-1">
                      View
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full flex h-40 items-center justify-center text-stone">
              No projects in this category yet. Check back soon.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
