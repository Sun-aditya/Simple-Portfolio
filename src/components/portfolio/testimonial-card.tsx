import type { Testimonial } from "@/types/portfolio";

type TestimonialCardProps = Readonly<{
  testimonial: Testimonial;
  spanFullWidth?: boolean;
}>;

export function TestimonialCard({ testimonial, spanFullWidth }: TestimonialCardProps) {
  const cardClassName = spanFullWidth
    ? "testimonial-card testimonial-card--featured"
    : "testimonial-card";

  return (
    <article className={cardClassName}>
      <header className="testimonial-card__header">
        <div>
          <h3>{testimonial.name}</h3>
          <p className="testimonial-card__relationship">{testimonial.relationship}</p>
        </div>
      </header>
      <p className="testimonial-card__text">{testimonial.testimonial}</p>
    </article>
  );
}