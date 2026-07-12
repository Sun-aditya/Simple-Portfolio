import { profile } from "@/data/profile";

export function AboutSection() {
  const positioningRemainder = profile.positioning.startsWith(profile.academicRole)
    ? profile.positioning.slice(profile.academicRole.length)
    : ` ${profile.positioning}`;

  return (
    <section
      id="about"
      className="about-section shell-section"
      aria-labelledby="about-heading"
    >
      <h1 id="about-heading">{profile.heading}</h1>
      <p className="about-section__lead">
        <em>{profile.academicRole}</em>
        {positioningRemainder}
      </p>
      <p className="about-section__supporting">{profile.educationLine}</p>
    </section>
  );
}
