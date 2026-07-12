import Image from "next/image";

import type { SocialPost } from "@/types/portfolio";

type SocialPostCardProps = Readonly<{ post: SocialPost }>;

export function SocialPostCard({ post }: SocialPostCardProps) {
  const hasMetrics =
    post.likes !== null || post.comments !== null || post.reposts !== null || post.views !== null;

  return (
    <article className={`social-post-card${post.featured ? " social-post-card--featured" : ""}`}>
      <header className="social-post-card__header">
        <div>
          <p className="social-post-card__platform">{post.platform}</p>
          <h3 className="social-post-card__author">{post.author}</h3>
          {post.handle ? <p className="social-post-card__handle">{post.handle}</p> : null}
        </div>
        {post.date ? <p className="social-post-card__date">{post.date}</p> : null}
      </header>

      {post.image ? (
        <figure className="social-post-card__media">
          <Image src={post.image} alt={post.imageAlt ?? ""} width={1600} height={1000} />
        </figure>
      ) : null}

      <p className="social-post-card__text">{post.text}</p>

      {hasMetrics ? (
        <dl className="social-post-card__metrics" aria-label={`${post.platform} engagement metrics`}>
          {post.likes !== null ? (
            <div>
              <dt>Likes</dt>
              <dd>{post.likes}</dd>
            </div>
          ) : null}
          {post.comments !== null ? (
            <div>
              <dt>Comments</dt>
              <dd>{post.comments}</dd>
            </div>
          ) : null}
          {post.reposts !== null ? (
            <div>
              <dt>Reposts</dt>
              <dd>{post.reposts}</dd>
            </div>
          ) : null}
          {post.views !== null ? (
            <div>
              <dt>Views</dt>
              <dd>{post.views}</dd>
            </div>
          ) : null}
        </dl>
      ) : null}
    </article>
  );
}