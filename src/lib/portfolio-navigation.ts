export const portfolioNavigation = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "open-source", label: "Open Source" },
  { id: "writing", label: "Writing" },
  { id: "testimonials", label: "Testimonials" },
  { id: "socialwall", label: "#socialwall" },
  { id: "contact", label: "Contact" },
] as const;

export type PortfolioSectionId = (typeof portfolioNavigation)[number]["id"];
