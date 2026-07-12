import { WritingRow } from "@/components/portfolio/writing-row";
import { writing } from "@/data/writing";

const orderedWriting = [...writing].sort((first, second) => first.displayOrder - second.displayOrder);

export function WritingSection() {
  return (
    <section id="writing" className="writing-section shell-section" aria-labelledby="writing-heading">
      <h2 id="writing-heading">Writing</h2>
      <div className="writing-list">
        {orderedWriting.map((article) => (
          <WritingRow key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}