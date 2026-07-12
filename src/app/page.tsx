import { PageShell } from "@/components/layout/page-shell";
import { AboutSection } from "@/components/sections/about-section";
import { OpenSourceSection } from "@/components/sections/open-source-section";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function Home() {
  return (
    <PageShell>
      <AboutSection />

      <div className="shell-section-stack">
        <ProjectsSection />
        <OpenSourceSection />
        <PlaceholderSection
          id="writing"
          title="Writing"
          description="Development placeholder for future technical writing."
        />
        <PlaceholderSection
          id="contact"
          title="Contact"
          description="Development placeholder for future contact links."
        />
      </div>
    </PageShell>
  );
}

function PlaceholderSection({
  id,
  title,
  description,
}: Readonly<{ id: string; title: string; description: string }>) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      className="shell-section shell-section--placeholder"
      aria-labelledby={headingId}
    >
      <p className="eyebrow">Phase 2 placeholder</p>
      <h2 id={headingId}>{title}</h2>
      <p>{description}</p>
    </section>
  );
}
