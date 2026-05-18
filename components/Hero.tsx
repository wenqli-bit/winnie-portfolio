"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-husky-800 pt-28">
      {/* Subtle gold dot pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(183,165,122,0.4) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:px-12 lg:grid-cols-2 lg:gap-16 lg:py-24">
        {/* LEFT */}
        <div>
          {/* Top badges */}
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-xs font-bold tracking-wide text-gold">
              🐾 GO HUSKIES
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-white/90">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
              </span>
              Seeking Summer 2026 DS / DA roles
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-[0.2em] text-white/70"
          >
            HI — I&apos;M
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 font-display text-6xl font-extrabold leading-none text-white md:text-7xl lg:text-8xl"
          >
            Winnie Li.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 font-display text-2xl italic leading-snug text-gold-100 md:text-3xl lg:text-4xl"
          >
            I turn 1.1M data points into stories people{" "}
            <span className="font-bold text-gold">actually understand.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 space-y-1 text-sm text-white/70"
          >
            <p>Data Scientist · UW MS Candidate · Founder of BriskStarter</p>
            <p>Python · PyTorch · SQL · Tableau · D3 · I also make crafts on weekends</p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn-gold">
              View My Work →
            </a>
            <a href="#demo" className="btn-outline">
              Try My AI Demo
            </a>
          </motion.div>

          {/* Social row */}
          <div className="mt-12 flex flex-wrap gap-6 text-sm text-white/60">
            <a
              href="https://www.linkedin.com/in/winnie-li1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/wenqli-bit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:wenqli090603@gmail.com"
              className="hover:text-gold transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        {/* RIGHT — Magazine collage portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto hidden h-[520px] w-full max-w-md lg:block"
        >
          {/* Newsprint background */}
          <div className="absolute inset-0 -rotate-3 rounded-lg bg-cream paper-grain shadow-2xl" />

          {/* Gold scribble */}
          <svg
            className="absolute left-0 right-0 top-12 -z-0"
            viewBox="0 0 400 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 40 30 Q 200 5 360 35"
              stroke="#B7A57A"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.7"
            />
          </svg>

          {/* Portrait — put your photo at /public/portrait.png */}
          <div className="absolute left-1/2 top-20 h-80 w-60 -translate-x-1/2 overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/portrait.png"
              alt="Wenqing (Winnie) Li"
              fill
              priority
              className="object-cover"
              sizes="240px"
            />
          </div>

          {/* Floating labels (PPT echo) */}
          <span className="absolute left-2 top-16 rounded-full bg-husky px-3 py-1 text-[10px] font-bold tracking-wider text-white shadow-lg">
            CREATOR
          </span>
          <span className="absolute right-4 top-10 rounded-full bg-gold px-3 py-1 text-[10px] font-bold tracking-wider text-husky-deep shadow-lg">
            TRAVELLER
          </span>
          <span className="absolute bottom-20 left-0 rounded-full bg-gold px-3 py-1 text-[10px] font-bold tracking-wider text-husky-deep shadow-lg">
            DATA STORYTELLER
          </span>
          <span className="absolute bottom-12 right-0 rounded-full bg-husky px-3 py-1 text-[10px] font-bold tracking-wider text-white shadow-lg">
            CURIOUS BUILDER
          </span>

          {/* Tape strips */}
          <div className="absolute left-12 top-20 h-3 w-16 -rotate-12 rounded-sm bg-gold/60" />
          <div className="absolute bottom-16 right-12 h-3 w-16 rotate-12 rounded-sm bg-gold/50" />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="absolute inset-x-0 bottom-8 flex justify-center">
        <div className="animate-bounce text-white/50">↓</div>
      </div>
    </section>
  );
}
