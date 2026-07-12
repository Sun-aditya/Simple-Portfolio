export const portfolioNavigation = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "open-source", label: "Open Source" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
] as const;

export type PortfolioSectionId = (typeof portfolioNavigation)[number]["id"];
