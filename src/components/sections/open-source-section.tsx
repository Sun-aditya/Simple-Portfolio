import { OpenSourceCard } from "@/components/portfolio/open-source-card";
import { openSource } from "@/data/openSource";

const orderedContributions = [...openSource.contributions].sort(
  (first, second) => first.displayOrder - second.displayOrder,
);

export function OpenSourceSection() {
  return (
    <section
      id="open-source"
      className="open-source-section shell-section"
      aria-labelledby="open-source-heading"
    >
      <h2 id="open-source-heading">Open Source</h2>
      <div className="open-source-list">
        {orderedContributions.map((contribution) => (
          <OpenSourceCard key={contribution.id} contribution={contribution} />
        ))}
      </div>
    </section>
  );
}
