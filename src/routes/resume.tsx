import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { workHistory } from "@/lib/projects";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Tianne Pane" },
      {
        name: "description",
        content:
          "Resume of Tianne Pane, product manager — experience, skills, and education.",
      },
      { property: "og:title", content: "Resume — Tianne Pane" },
      {
        property: "og:description",
        content:
          "Resume of Tianne Pane, product manager — experience, skills, and education.",
      },
    ],
  }),
  component: ResumePage,
});

const skills = [
  "Product strategy",
  "Roadmapping",
  "User research",
  "SQL & analytics",
  "A/B testing",
  "Pricing & packaging",
  "Go-to-market",
  "Prototyping",
];

function ResumePage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
      <section className="flex flex-wrap items-end justify-between gap-6 py-20 sm:py-28">
        <div>
          <h1 className="fade-up text-5xl font-light leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            Resume
          </h1>
          <p
            className="fade-up mt-4 max-w-md text-lg text-muted-foreground"
            style={{ animationDelay: "120ms" }}
          >
            The short version. PDF available on request.
          </p>
        </div>
        <button className="mono-label inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-accent-foreground transition-opacity hover:opacity-90">
          <Download className="h-4 w-4" />
          Download PDF
        </button>
      </section>

      <section className="border-t border-border py-14">
        <h2 className="mono-label text-muted-foreground">Experience</h2>
        <ul className="mt-8 space-y-8">
          {workHistory.map((job, i) => (
            <Reveal key={job.company} delay={i * 60}>
              <li className="grid grid-cols-1 gap-2 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-x-8">
                <span className="mono-label pt-1 text-muted-foreground">{job.year}</span>
                <div>
                  <p className="text-xl font-medium text-foreground">{job.company}</p>
                  <p className="mt-1 text-lg text-muted-foreground">{job.role}</p>
                  <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">
                    Led discovery, prioritization, and launch across a cross-functional
                    team of engineers and designers.
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-t border-border py-14">
        <h2 className="mono-label text-muted-foreground">Skills</h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="mono-label rounded-full border border-border px-4 py-2 text-foreground"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border py-14 pb-24">
        <h2 className="mono-label text-muted-foreground">Education</h2>
        <div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-x-8">
          <span className="mono-label pt-1 text-muted-foreground">2022</span>
          <div>
            <p className="text-xl font-medium text-foreground">University of Toronto</p>
            <p className="mt-1 text-lg text-muted-foreground">
              B.Com, Business & Computer Science
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
