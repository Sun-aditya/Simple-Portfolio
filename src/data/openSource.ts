import type { OpenSourceData } from "@/types/portfolio";

// TEMPORARY DEVELOPMENT DATA — replace with verified factual open-source contributions before production deployment.
export const openSource: OpenSourceData = {
  contributions: [
    {
      id: "devflow-cli-lockfile-detection",
      repository: "devflow-cli",
      contributionTitle: "Improved package-manager detection",
      description:
        "Improved package-manager detection for repositories using multiple lockfiles and added test coverage for edge cases.",
      contributionType: "Pull Request",
      status: "Merged",
      technologies: ["Go", "CLI", "Testing"],
      repositoryUrl: null,
      contributionUrl: null,
      date: null,
      featured: false,
      displayOrder: 1,
    },
    {
      id: "cloudscope-accessible-navigation",
      repository: "cloudscope",
      contributionTitle: "Improved dashboard responsiveness and navigation accessibility",
      description:
        "Fixed responsive layout behavior in the deployment dashboard and improved keyboard accessibility for navigation controls.",
      contributionType: "Pull Request",
      status: "Merged",
      technologies: ["React", "TypeScript", "Accessibility"],
      repositoryUrl: null,
      contributionUrl: null,
      date: null,
      featured: false,
      displayOrder: 2,
    },
    {
      id: "dockyard-compose-validation",
      repository: "dockyard",
      contributionTitle: "Strengthened Docker Compose validation",
      description:
        "Improved Docker Compose configuration validation and added clearer error messages for invalid service definitions.",
      contributionType: "Issue / Contribution",
      status: "Closed",
      technologies: ["Docker", "Go", "Developer Tools"],
      repositoryUrl: null,
      contributionUrl: null,
      date: null,
      featured: false,
      displayOrder: 3,
    },
  ],
  statistics: [],
};
