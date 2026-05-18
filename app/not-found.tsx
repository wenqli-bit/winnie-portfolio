import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cream paper-grain px-6">
      <div className="text-center">
        <p className="font-display text-8xl font-extrabold text-husky">404</p>
        <p className="mt-4 text-xl text-stone">
          That page wandered off. Probably out hiking.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-husky px-6 py-3 font-semibold text-white transition-all hover:bg-husky-700"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
