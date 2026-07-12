import { ProjectCard } from "@/components/portfolio/project-card";
import { projects } from "@/data/projects";

const orderedProjects = [...projects].sort(
  (first, second) => first.displayOrder - second.displayOrder,
);

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="projects-section shell-section"
      aria-labelledby="projects-heading"
    >
      <h2 id="projects-heading">Projects</h2>
      <div className="project-grid">
        {orderedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
