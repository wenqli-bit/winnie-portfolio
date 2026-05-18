export default function Footer() {
  return (
    <footer className="bg-husky-900 py-8 text-white/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-xs md:flex-row md:px-12">
        <p>© {new Date().getFullYear()} Wenqing (Winnie) Li · Seattle, WA</p>
        <p className="italic">
          Built with Next.js · Tailwind · Framer Motion · 🐾 Go Huskies
        </p>
      </div>
    </footer>
  );
}
