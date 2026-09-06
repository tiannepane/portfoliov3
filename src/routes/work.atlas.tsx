import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { atlasCaseStudy as cs, atlasSectionImages } from "@/lib/case-studies";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work/atlas")({
  head: () => ({
    meta: [
      { title: "Atlas — Airbnb Case Study | Tianne Pane" },
      {
        name: "description",
        content:
          "Case study: Atlas, a self-updating roadmap for teams that ship weekly. How we cut planning time 40% at Airbnb.",
      },
      { property: "og:title", content: "Atlas — Airbnb Case Study | Tianne Pane" },
      {
        property: "og:description",
        content:
          "Case study: Atlas, a self-updating roadmap for teams that ship weekly. How we cut planning time 40% at Airbnb.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: cs.heroImage },
      { name: "twitter:image", content: cs.heroImage },
    ],
  }),
  component: AtlasCaseStudy,
});

function AtlasCaseStudy() {
  const [active, setActive] = useState(cs.sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    for (const section of cs.sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
      <div className="grid grid-cols-1 gap-12 py-12 sm:py-20 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-20">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Link
            to="/"
            className="mono-label inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back
          </Link>
          <nav className="mt-8 flex flex-row flex-wrap gap-x-5 gap-y-2 lg:flex-col lg:gap-3">
            {cs.sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={cn(
                  "text-base transition-colors",
                  active === section.id
                    ? "font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {section.navLabel}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <article className="min-w-0">
          {/* Header */}
          <header>
            <p className="mono-label text-muted-foreground">
              {cs.client} · {cs.status} · {cs.year}
            </p>
            <h1 className="fade-up mt-6 max-w-3xl text-5xl font-light leading-[1.05] tracking-tight text-foreground sm:text-6xl">
              {cs.headline}
            </h1>
            <Reveal className="mt-10">
              <img
                src={cs.heroImage}
                alt={`${cs.title} — ${cs.headline}`}
                width={1280}
                height={960}
                className="aspect-[4/3] w-full rounded-sm object-cover"
              />
            </Reveal>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 sm:grid-cols-4">
              {[
                ["ROLE", cs.role],
                ["TIMELINE", cs.timeline],
                ["TEAM", cs.team],
                ["SKILLS", cs.skills],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="mono-label text-muted-foreground">{label}</dt>
                  <dd className="mt-2 text-base text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </header>

          {/* Sections */}
          {cs.sections.map((section) => (
            <section key={section.id} id={section.id} className="mt-20 scroll-mt-28 sm:mt-28">
              <Reveal>
                <p className="mono-label text-muted-foreground">{section.kicker}</p>
                <h2 className="mt-6 max-w-2xl text-3xl font-light leading-tight tracking-tight text-foreground sm:text-4xl">
                  {section.headline}
                </h2>
                <div className="mt-6 max-w-2xl space-y-5">
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="text-base leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {atlasSectionImages[section.id] && (
                  <img
                    src={atlasSectionImages[section.id]}
                    alt={`${section.navLabel} — ${cs.title}`}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="mt-10 aspect-[4/3] w-full rounded-sm object-cover"
                  />
                )}
              </Reveal>
            </section>
          ))}

          {/* Footer nav */}
          <div className="mt-24 border-t border-border pt-10 pb-24">
            <Link
              to="/"
              className="mono-label inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to all work
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
