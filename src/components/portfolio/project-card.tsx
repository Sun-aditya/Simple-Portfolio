import type { Project, ProjectStatus } from "@/types/portfolio";

type ProjectCardProps = Readonly<{ project: Project }>;

const statusLabels: Record<Exclude<ProjectStatus, "unknown">, string> = {
  active: "Active",
  archived: "Archived",
  "in-progress": "In progress",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const statusLabel =
    project.status === "unknown" ? null : statusLabels[project.status];
  const metadata = project.metric ?? statusLabel;
  const actions = [
    {
      href: project.githubUrl,
      label: "Source",
      ariaLabel: `View ${project.title} source`,
    },
    {
      href: project.liveDemoUrl,
      label: "Demo",
      ariaLabel: `View ${project.title} live demo`,
    },
    {
      href: project.documentationUrl,
      label: "Documentation",
      ariaLabel: `View ${project.title} documentation`,
    },
  ].filter((action): action is { href: string; label: string; ariaLabel: string } =>
    Boolean(action.href),
  );

  return (
    <article className="project-card">
      <div className="project-card__heading">
        <h3>{project.title}</h3>
        {metadata ? <span className="project-card__metadata">{metadata}</span> : null}
      </div>

      <p className="project-card__description">{project.shortDescription}</p>

      <ul className="project-card__technologies" aria-label={`${project.title} technologies`}>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      {actions.length > 0 ? (
        <div className="project-card__actions">
          {actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noreferrer"
              aria-label={action.ariaLabel}
            >
              {action.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}
