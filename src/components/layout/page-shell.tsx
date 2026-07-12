import type { ReactNode } from "react";

import { SiteNavigation } from "@/components/layout/site-navigation";
import { UtilityControls } from "@/components/layout/utility-controls";

type PageShellProps = Readonly<{ children: ReactNode }>;

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="page-shell">
      <SiteNavigation />
      <UtilityControls />
      <main className="shell-main">{children}</main>
    </div>
  );
}
