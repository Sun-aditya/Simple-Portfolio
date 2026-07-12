import type { WritingArticle } from "@/types/portfolio";

type WritingRowProps = Readonly<{ article: WritingArticle }>;

export function WritingRow({ article }: WritingRowProps) {
  const title = article.url ? (
    <a href={article.url} target="_blank" rel="noreferrer">
      {article.title}
    </a>
  ) : (
    <span>{article.title}</span>
  );

  return (
    <article className="writing-row">
      <div className="writing-row__content">
        <h3 className="writing-row__title">{title}</h3>
        {article.summary ? <p className="writing-row__summary">{article.summary}</p> : null}
        <ul className="writing-row__tags" aria-label={`${article.title} tags`}>
          {article.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      {article.readingTime ? <p className="writing-row__reading-time">{article.readingTime}</p> : null}
    </article>
  );
}