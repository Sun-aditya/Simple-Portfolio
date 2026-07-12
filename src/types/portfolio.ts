export type NullableUrl = string | null;

export type ProjectStatus = "active" | "archived" | "in-progress" | "unknown";

export type Profile = {
  name: string;
  heading: string;
  academicRole: string;
  positioning: string;
  education: string;
  educationLine: string;
  interests: readonly string[];
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string | null;
  technologies: readonly string[];
  githubUrl: NullableUrl;
  liveDemoUrl: NullableUrl;
  documentationUrl: NullableUrl;
  image: string | null;
  video: string | null;
  status: ProjectStatus;
  metric: string | null;
  featured: boolean;
  displayOrder: number;
};

export type ExperienceEntry = {
  id: string;
  organization: string;
  role: string;
  startDate: string | null;
  endDate: string | null;
  description: string | null;
  technologies: readonly string[];
};

export type OpenSourceContribution = {
  id: string;
  repository: string;
  contributionTitle: string;
  description: string;
  contributionType: string;
  status: string;
  technologies: readonly string[];
  repositoryUrl: NullableUrl;
  contributionUrl: NullableUrl;
  date: string | null;
  featured: boolean;
  displayOrder: number;
};

export type OpenSourceData = {
  contributions: readonly OpenSourceContribution[];
  statistics: readonly { label: string; value: string | null }[];
};

export type WritingArticle = {
  id: string;
  slug: string;
  title: string;
  summary: string | null;
  publishedAt: string | null;
  readingTime: string | null;
  tags: readonly string[];
  url: NullableUrl;
  displayOrder: number;
};

export type Testimonial = {
  id: string;
  name: string;
  relationship: string;
  testimonial: string;
  image: NullableUrl;
  imageAlt: string | null;
  profileUrl: NullableUrl;
  displayOrder: number;
};

export type SocialPost = {
  id: string;
  platform: string;
  author: string;
  handle: string | null;
  text: string;
  date: string | null;
  image: NullableUrl;
  imageAlt: string | null;
  video: NullableUrl;
  postUrl: NullableUrl;
  likes: number | null;
  comments: number | null;
  reposts: number | null;
  views: number | null;
  featured: boolean;
  displayOrder: number;
};

export type Launcher = {
  id: string;
  label: string;
  description: string;
  ariaLabel: string;
  displayOrder: number;
};

export type SocialLinks = {
  github: NullableUrl;
  linkedin: NullableUrl;
  email: NullableUrl;
  resume: NullableUrl;
};
