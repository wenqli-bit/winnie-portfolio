import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getProject, projects } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const p = getProject(params.slug);
  if (!p) return { title: "Project not found" };
  return {
    title: `${p.title} — Winnie Li`,
    description: p.summary,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="bg-husky-800 pt-32 pb-20 text-white">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <Link
            href="/#projects"
            className="text-sm text-gold hover:underline"
          >
            ← Back to all projects
          </Link>

          <span className="mt-6 inline-block rounded-full bg-gold px-3 py-1 text-[10px] font-extrabold tracking-wider text-husky-deep">
            {project.categoryLabel.toUpperCase()}
          </span>

          <h1 className="mt-4 font-display text-5xl font-extrabold md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-3 text-xl text-gold-100">{project.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="bg-cream paper-grain py-20">
        <div className="mx-auto max-w-3xl space-y-12 px-6 md:px-12">
          <Section label="When" body={project.when} />
          <Section label="Why" body={project.why} />
          <Section label="What" body={project.what} />
          <Section label="How" body={project.how} />

          {project.insights && project.insights.length > 0 && (
            <div>
              <Label>Insights</Label>
              <ul className="mt-4 space-y-3">
                {project.insights.map((it, i) => (
                  <li
                    key={i}
                    className="flex gap-3 rounded-lg border border-stone/15 bg-white p-4 text-ink/85"
                  >
                    <span className="text-gold">✨</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.links && project.links.length > 0 && (
            <div>
              <Label>Links</Label>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="rounded-full border border-husky/30 bg-white px-4 py-2 text-sm font-semibold text-husky transition-all hover:border-husky hover:shadow-md"
                  >
                    {l.label} →
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold tracking-[0.3em] text-gold">
      {String(children).toUpperCase()}
    </p>
  );
}

function Section({ label, body }: { label: string; body?: string }) {
  if (!body) return null;
  return (
    <div>
      <Label>{label}</Label>
      <p className="mt-3 text-lg leading-relaxed text-ink/85">{body}</p>
    </div>
  );
}
