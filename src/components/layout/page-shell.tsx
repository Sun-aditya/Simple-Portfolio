import type { ReactNode } from "react";

type PageShellProps = Readonly<{ children: ReactNode }>;

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="page-shell">
      <aside className="shell-sidebar" aria-label="Portfolio sidebar placeholder">
        <div><p className="shell-sidebar__name">Aditya Maurya</p><p className="shell-sidebar__label">Phase 1 layout foundation</p></div>
        <p className="shell-sidebar__reserved">Navigation region reserved</p>
      </aside>
      <div className="shell-safe-region shell-safe-region--top" aria-hidden="true">Theme control region reserved</div>
      <div className="shell-safe-region shell-safe-region--bottom" aria-hidden="true">Launcher region reserved</div>
      <main className="shell-main">{children}</main>
    </div>
  );
}
