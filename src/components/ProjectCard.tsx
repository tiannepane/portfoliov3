import { Link } from "@tanstack/react-router";
import { Eye } from "lucide-react";
import type { Project } from "@/lib/projects";
import { Reveal } from "./Reveal";

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const image = (
    <div className="relative overflow-hidden rounded-sm">
      <img
        src={project.image}
        alt={project.title}
        width={1024}
        height={768}
        loading="lazy"
        className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      {project.featured && (
        <span className="mono-label absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-accent-foreground">
          <Eye className="h-3.5 w-3.5" />
          View case study
        </span>
      )}
    </div>
  );

  return (
    <Reveal delay={delay}>
      <article className="group">
        {project.slug ? (
          <Link
            to="/work/$slug"
            params={{ slug: project.slug }}
            aria-label={`View ${project.title} case study`}
          >
            {image}
          </Link>
        ) : (
          image
        )}
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-xl italic leading-snug text-foreground">
            {project.tagline}
          </h3>
          <p className="mono-label text-muted-foreground">
            {project.meta} · {project.year}
          </p>
        </div>
      </article>
    </Reveal>
  );
}
