import type { OpenSourceContribution } from "@/types/portfolio";

type OpenSourceCardProps = Readonly<{
  contribution: OpenSourceContribution;
}>;

export function OpenSourceCard({ contribution }: OpenSourceCardProps) {
  const actions = [
    {
      href: contribution.repositoryUrl,
      label: "Repository",
      ariaLabel: `View the ${contribution.repository} repository`,
    },
    {
      href: contribution.contributionUrl,
      label: "Contribution",
      ariaLabel: `View the ${contribution.contributionTitle} contribution`,
    },
  ].filter((action): action is { href: string; label: string; ariaLabel: string } =>
    Boolean(action.href),
  );

  return (
    <article className="open-source-card">
      <div className="open-source-card__metadata">
        <p className="open-source-card__repository">{contribution.repository}</p>
        <p className="open-source-card__details">
          {contribution.contributionType}
          <span aria-hidden="true"> · </span>
          {contribution.status}
        </p>
      </div>

      <div className="open-source-card__content">
        <h3>{contribution.contributionTitle}</h3>
        <p className="open-source-card__description">{contribution.description}</p>
        <ul
          className="open-source-card__technologies"
          aria-label={`${contribution.repository} technologies`}
        >
          {contribution.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        {actions.length > 0 ? (
          <div className="open-source-card__actions">
            {actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noreferrer"
                aria-label={action.ariaLabel}
              >
                {action.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
