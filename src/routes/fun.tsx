import { createFileRoute } from "@tanstack/react-router";
import { funProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/fun")({
  head: () => ({
    meta: [
      { title: "Fun — Tianne Pane" },
      {
        name: "description",
        content:
          "Side projects, experiments, and things Tianne Pane makes for fun — games, photography, and doodles.",
      },
      { property: "og:title", content: "Fun — Tianne Pane" },
      {
        property: "og:description",
        content:
          "Side projects, experiments, and things Tianne Pane makes for fun — games, photography, and doodles.",
      },
    ],
  }),
  component: FunPage,
});

function FunPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
      <section className="py-20 sm:py-28">
        <h1 className="fade-up max-w-2xl text-5xl font-light leading-[1.05] tracking-tight text-foreground sm:text-6xl">
          Things I make for <em className="font-normal italic">fun.</em>
        </h1>
        <p
          className="fade-up mt-6 max-w-md text-lg leading-relaxed text-muted-foreground"
          style={{ animationDelay: "120ms" }}
        >
          Side projects, weekend experiments, and the occasional game jam. No KPIs here.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-x-8 gap-y-14 pb-24 md:grid-cols-2 lg:grid-cols-3">
        {funProjects.map((project, i) => (
          <ProjectCard key={project.title} project={project} delay={i * 100} />
        ))}
      </section>
    </div>
  );
}
