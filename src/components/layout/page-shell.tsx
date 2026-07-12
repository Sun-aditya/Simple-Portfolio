import type { ReactNode } from "react";

import { SiteNavigation } from "@/components/layout/site-navigation";

type PageShellProps = Readonly<{ children: ReactNode }>;

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="page-shell">
      <SiteNavigation />
      <main className="shell-main">{children}</main>
    </div>
  );
}
