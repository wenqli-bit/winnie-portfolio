"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#demo", label: "Demo" },
  { href: "#life", label: "Life" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const topOnHero = !scrolled;

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-stone/10 bg-white/85 shadow-sm backdrop-blur-md"
          : "bg-husky-800/55 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <Link href="/" className="group flex items-baseline gap-3">
          <span
            className={cn(
              "font-display text-2xl font-extrabold transition-colors",
              topOnHero ? "text-white" : "text-husky"
            )}
          >
            Winnie<span className="text-gold">.</span>
          </span>
          <span
            className={cn(
              "hidden text-xs italic transition-colors md:inline",
              topOnHero ? "text-white/65" : "text-stone"
            )}
          >
            Wenqing Li - UW Data Science
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <ul className="hidden items-center gap-7 text-sm font-medium md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={cn(
                    "transition-colors",
                    topOnHero
                      ? "text-white/80 hover:text-gold"
                      : "text-ink/80 hover:text-husky"
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            className={cn(
              "hidden items-center gap-3 border-l pl-5 md:flex",
              topOnHero ? "border-white/15" : "border-stone/20"
            )}
          >
            <a
              href="https://www.linkedin.com/in/winnie-li1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={cn(
                "transition-colors",
                topOnHero ? "text-white/70 hover:text-gold" : "text-ink/60 hover:text-husky"
              )}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/wenqli-bit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={cn(
                "transition-colors",
                topOnHero ? "text-white/70 hover:text-gold" : "text-ink/60 hover:text-husky"
              )}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>

          <a
            href="/resume.pdf"
            className="rounded-full bg-husky px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-husky-700 hover:shadow-md"
          >
            Resume
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors md:hidden",
              topOnHero
                ? "border-white/20 bg-white/10 text-white"
                : "border-stone/20 bg-white text-husky"
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-husky-800 px-6 py-4 shadow-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-white/85 transition-colors hover:bg-white/10 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
