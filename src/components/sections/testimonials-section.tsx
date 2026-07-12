import { TestimonialCard } from "@/components/portfolio/testimonial-card";
import { testimonials } from "@/data/testimonials";

const orderedTestimonials = [...testimonials].sort(
  (first, second) => first.displayOrder - second.displayOrder,
);

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="testimonials-section shell-section"
      aria-labelledby="testimonials-heading"
    >
      <h2 id="testimonials-heading">Testimonials</h2>
      <div className="testimonials-grid">
        {orderedTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            spanFullWidth={index === orderedTestimonials.length - 1}
          />
        ))}
      </div>
    </section>
  );
}