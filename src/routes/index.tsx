import { createFileRoute } from "@tanstack/react-router";
import { workProjects, workHistory } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tianne Pane — Product Manager" },
      {
        name: "description",
        content:
          "I'm Tianne, a product manager who ships. Selected product work across roadmapping, onboarding, analytics, and AI.",
      },
      { property: "og:title", content: "Tianne Pane — Product Manager" },
      {
        property: "og:description",
        content:
          "I'm Tianne, a product manager who ships. Selected product work across roadmapping, onboarding, analytics, and AI.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
      {/* Hero */}
      <section className="grid grid-cols-1 gap-12 py-20 sm:py-32 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-24">
        <h1 className="fade-up max-w-xl text-5xl font-light leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          I'm Tianne, a product manager who{" "}
          <em className="font-normal italic">ships.</em>
        </h1>

        <div className="fade-up w-full lg:w-auto" style={{ animationDelay: "150ms" }}>
          <ul className="space-y-3">
            {workHistory.map((job) => (
              <li
                key={job.company}
                className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-6 sm:grid-cols-[3.5rem_minmax(0,10rem)_minmax(0,1fr)]"
              >
                <span className="mono-label text-muted-foreground">{job.year}</span>
                <span className="text-base font-medium text-foreground">{job.company}</span>
                <span className="col-start-2 text-base text-muted-foreground sm:col-start-3">
                  {job.role}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Project grid */}
      <section className="grid grid-cols-1 gap-x-8 gap-y-14 pb-24 md:grid-cols-2">
        {workProjects.map((project, i) => (
          <div key={project.title} className={i % 2 === 1 ? "md:mt-24" : ""}>
            <ProjectCard project={project} delay={(i % 2) * 100} />
          </div>
        ))}
      </section>
    </div>
  );
}
