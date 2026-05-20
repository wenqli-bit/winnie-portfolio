import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getProject, projects, type Figure, type StarSection } from "@/lib/projects";

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
    title: `${p.title} - Winnie Li`,
    description: p.summary,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <main className="h-dvh overflow-y-auto bg-cream">
      <Nav />

      <section className="bg-husky-800 pt-24 pb-12 text-white">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Link href="/#projects" className="text-sm font-semibold text-gold hover:underline">
            Back to all projects
          </Link>

          <div className="mt-6 grid grid-cols-1 gap-7 lg:grid-cols-[1fr_300px] lg:items-end">
            <div>
              <span className="inline-block rounded-full bg-gold px-3 py-1 text-[10px] font-extrabold tracking-wider text-husky-deep">
                {project.categoryLabel.toUpperCase()}
              </span>
              <h1 className="mt-4 max-w-4xl font-display text-3xl font-extrabold leading-[1.08] md:text-5xl">
                {project.title}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-gold-100 md:text-lg">
                {project.tagline}
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-white/72 md:text-base">
                {project.summary}
              </p>
            </div>

            {project.heroStats && (
              <div className="grid grid-cols-2 gap-2">
                {project.heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div
                    className={`font-display text-xl font-extrabold md:text-2xl ${
                      stat.accent ? "text-gold" : "text-white"
                    }`}
                  >
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/55">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <article className="paper-grain py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[150px_1fr]">
            <StarRail sections={project.star ?? []} />

            <div className="space-y-6">
              {project.star?.map((section, index) => (
                <StarBlock
                  key={section.key}
                  section={section}
                />
              ))}

              {project.visualGallery && project.visualGallery.length > 0 && (
                <VisualGallery figures={project.visualGallery} />
              )}

              {project.comparison && (
                <section id="model-comparison" className="rounded-lg border border-stone/15 bg-white p-4 shadow-sm md:p-5">
                  <Label>Performance</Label>
                  <div className="mt-4 overflow-x-auto">
                    <div className="min-w-[640px] overflow-hidden rounded-md border border-stone/15">
                      <div className="grid grid-cols-4 bg-husky px-4 py-3 text-xs font-bold uppercase tracking-wider text-white">
                        <span>Metric</span>
                        <span>Baseline</span>
                        <span>Attention</span>
                        <span>Delta</span>
                      </div>
                      {project.comparison.rows.map((row) => (
                        <div
                          key={row.metric}
                          className="grid grid-cols-4 gap-3 border-t border-stone/10 px-4 py-3 text-sm"
                        >
                          <span className="font-semibold text-ink">{row.metric}</span>
                          <span className="text-stone">{row.baseline}</span>
                          <span className="font-semibold text-husky">{row.variant}</span>
                          <span className="font-semibold text-gold-700">{row.delta ?? "-"}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {project.insights && project.insights.length > 0 && (
                <section className="rounded-lg border border-stone/15 bg-white p-4 shadow-sm md:p-5">
                  <Label>Key Takeaways</Label>
                  <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
                    {project.insights.map((it, i) => (
                      <div key={it} className="rounded-md bg-cream p-3 text-sm leading-relaxed text-ink/80">
                        <span className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-extrabold text-husky-deep">
                          {i + 1}
                        </span>
                        <p>{it}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {project.links && project.links.length > 0 && (
                <section className="rounded-lg border border-stone/15 bg-white p-4 shadow-sm md:p-5">
                  <Label>Links</Label>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {project.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        className="rounded-full border border-husky/30 bg-white px-4 py-2 text-sm font-semibold text-husky transition-all hover:border-husky hover:shadow-md"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}

function StarRail({ sections }: { sections: StarSection[] }) {
  if (sections.length === 0) return null;

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 rounded-lg border border-stone/15 bg-white/75 p-3 text-sm shadow-sm backdrop-blur">
        <p className="font-display text-xl font-bold text-husky">Project</p>
        <nav className="mt-3 space-y-2">
          {sections.map((section) => (
            <a
              key={section.key}
              href={`#${section.key}`}
              className="block rounded-md px-2 py-2 text-stone transition-colors hover:bg-cream hover:text-husky"
            >
              {section.eyebrow}
            </a>
          ))}
          <a
            href="#model-comparison"
            className="block rounded-md px-2 py-2 text-stone transition-colors hover:bg-cream hover:text-husky"
          >
            Performance
          </a>
        </nav>
      </div>
    </aside>
  );
}

function StarBlock({
  section,
}: {
  section: StarSection;
}) {
  return (
    <section id={section.key} className="scroll-mt-28 rounded-lg border border-stone/15 bg-white p-4 shadow-sm md:p-5">
      <div
        className={`grid grid-cols-1 gap-5 ${
          section.figures && section.figures.length > 0 ? "xl:grid-cols-[0.84fr_1.16fr]" : ""
        }`}
      >
        <div>
          <Label>{section.eyebrow}</Label>
          <h2 className="mt-2 font-display text-xl font-bold leading-tight text-ink md:text-2xl">
            <HighlightedText text={section.title} />
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-6 text-ink/78 md:text-[15px]">
            {section.body.map((paragraph) => (
              <p key={paragraph}>
                <HighlightedText text={paragraph} />
              </p>
            ))}
          </div>
        </div>

        {section.figures && section.figures.length > 0 && (
          <div className="grid grid-cols-1 gap-3">
            {section.figures.map((figure) => (
              <InlineFigure key={figure.src} figure={figure} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function InlineFigure({ figure }: { figure: Figure }) {
  return (
    <figure className="overflow-hidden rounded-md border border-stone/15 bg-white shadow-sm">
      <div className="relative aspect-[16/9] bg-white">
        <Image
          src={figure.src}
          alt={figure.caption}
          fill
          className="object-contain p-3"
          sizes="(min-width: 1280px) 520px, (min-width: 768px) 680px, 100vw"
        />
      </div>
      <figcaption className="border-t border-stone/10 px-3 py-2 text-xs leading-relaxed text-stone md:text-[13px]">
        {figure.caption}
      </figcaption>
    </figure>
  );
}

function VisualGallery({ figures }: { figures: Figure[] }) {
  return (
    <section className="rounded-lg border border-stone/15 bg-white p-4 shadow-sm md:p-5">
      <Label>Visualization Gallery</Label>
      <div className="mt-2 max-w-2xl text-sm leading-6 text-ink/70">
        A curated set of Tableau-style visuals that show the project&apos;s analytical
        flow: demand timing, payment behavior, street-level revenue upside, mobility
        context, and final funding allocation.
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {figures.map((figure) => (
          <figure
            key={figure.src}
            className={`overflow-hidden rounded-lg border border-stone/15 bg-white shadow-sm ${
              figure.span === "full" ? "xl:col-span-2" : ""
            }`}
          >
            <div className="relative aspect-[16/10] bg-[#f7fafc]">
              <Image
                src={figure.src}
                alt={figure.caption}
                fill
                className="object-contain"
                sizes={figure.span === "full" ? "(min-width: 1280px) 900px, 100vw" : "(min-width: 1280px) 450px, 100vw"}
              />
            </div>
            <figcaption className="border-t border-stone/10 px-4 py-3 text-sm leading-relaxed text-stone">
              {figure.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
      {String(children)}
    </p>
  );
}

function HighlightedText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={`${part}-${index}`} className="font-semibold text-husky">
              {part.slice(2, -2)}
            </strong>
          );
        }

        return <span key={`${part}-${index}`}>{part}</span>;
      })}
    </>
  );
}
