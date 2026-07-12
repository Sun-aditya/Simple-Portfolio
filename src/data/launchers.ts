import type { Launcher } from "@/types/portfolio";

export const launchers: readonly Launcher[] = [
  {
    id: "ubuntu",
    label: "Ubuntu",
    description: "Future Ubuntu desktop and terminal portfolio interface.",
    ariaLabel: "Ubuntu launcher coming soon",
    displayOrder: 1,
  },
  {
    id: "tars",
    label: "TARS",
    description: "Future separate interactive TARS interface.",
    ariaLabel: "TARS launcher coming soon",
    displayOrder: 2,
  },
];