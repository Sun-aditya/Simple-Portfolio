import { SocialPostCard } from "@/components/portfolio/social-post-card";
import { socialWall } from "@/data/socialWall";

const orderedPosts = [...socialWall].sort((first, second) => first.displayOrder - second.displayOrder);

export function SocialWallSection() {
  return (
    <section
      id="socialwall"
      className="social-wall-section shell-section"
      aria-labelledby="socialwall-heading"
    >
      <h2 id="socialwall-heading">#socialwall</h2>
      <p className="social-wall-section__intro">
        Sample posts for future social content, curated to keep the layout honest while the real feed is still taking shape.
      </p>
      <div className="social-wall-grid">
        {orderedPosts.map((post) => (
          <SocialPostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}