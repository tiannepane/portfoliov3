import { createFileRoute } from "@tanstack/react-router";
import { workHistory } from "@/lib/projects";
import { Reveal } from "@/components/Reveal";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Tianne Pane" },
      {
        name: "description",
        content:
          "About Tianne Pane, a product manager who loves turning ambiguous problems into shipped products.",
      },
      { property: "og:title", content: "About — Tianne Pane" },
      {
        property: "og:description",
        content:
          "About Tianne Pane, a product manager who loves turning ambiguous problems into shipped products.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
      <section className="grid grid-cols-1 gap-12 py-20 sm:py-28 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-20">
        <Reveal>
          <img
            src={portrait}
            alt="Portrait of Tianne Pane"
            width={1024}
            height={1152}
            className="aspect-[8/9] w-full rounded-sm object-cover"
          />
        </Reveal>

        <div>
          <Reveal>
            <h1 className="max-w-xl text-4xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              I turn ambiguous problems into{" "}
              <em className="font-normal italic">shipped products.</em>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm Tianne, a product manager based in Toronto. I've spent the last few
                years working across fintech, dev tools, and consumer products — always
                closest to the work where strategy meets the keyboard.
              </p>
              <p>
                I care about tight feedback loops, honest metrics, and teams that ship
                small and often. When I'm not writing PRDs, I'm sketching side projects
                or out with a film camera.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border py-16 pb-24">
        <h2 className="mono-label text-muted-foreground">Experience</h2>
        <ul className="mt-8 space-y-6">
          {workHistory.map((job, i) => (
            <Reveal key={job.company} delay={i * 60}>
              <li className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-6 sm:grid-cols-[5rem_minmax(0,14rem)_minmax(0,1fr)]">
                <span className="mono-label text-muted-foreground">{job.year}</span>
                <span className="text-lg font-medium text-foreground">{job.company}</span>
                <span className="col-start-2 text-lg text-muted-foreground sm:col-start-3">
                  {job.role}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>
    </div>
  );
}
