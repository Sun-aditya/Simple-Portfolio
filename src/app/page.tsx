import { PageShell } from "@/components/layout/page-shell";

export default function Home() {
  return (
    <PageShell>
      <div className="development-notice" role="note">
        <span aria-hidden="true" className="development-notice__marker" />
        Phase 1 shell · development placeholders
      </div>
      <section className="shell-section shell-section--about" aria-labelledby="about-heading">
        <p className="eyebrow">Portfolio foundation</p>
        <h1 id="about-heading">Hey, I&apos;m Aditya.</h1>
        <p className="shell-section__lead">A Computer Science student exploring software engineering, backend development, DevOps, developer tools, and open source.</p>
        <p className="shell-section__supporting">Chitkara University Institute of Engineering &amp; Technology</p>
      </section>
      <div className="shell-section-stack">
        <PlaceholderSection title="Projects" description="Development placeholder for the future project collection." />
        <PlaceholderSection title="Experience" description="Development placeholder for future factual experience content." />
        <PlaceholderSection title="Open Source" description="Development placeholder for future contribution data." />
        <PlaceholderSection title="Writing" description="Development placeholder for future technical writing." />
        <PlaceholderSection title="Contact" description="Development placeholder for future contact links." />
      </div>
    </PageShell>
  );
}

function PlaceholderSection({ title, description }: Readonly<{ title: string; description: string }>) {
  const id = `${title.toLowerCase().replace(" ", "-")}-heading`;
  return (
    <section className="shell-section shell-section--placeholder" aria-labelledby={id}>
      <p className="eyebrow">Phase 1 placeholder</p>
      <h2 id={id}>{title}</h2>
      <p>{description}</p>
    </section>
  );
}
