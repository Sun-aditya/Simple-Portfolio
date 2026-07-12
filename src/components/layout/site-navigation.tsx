"use client";

import { useEffect, useId, useState } from "react";

import { useScrollSpy } from "@/hooks/use-scroll-spy";
import {
  portfolioNavigation,
  type PortfolioSectionId,
} from "@/lib/portfolio-navigation";

const sectionIds = portfolioNavigation.map((item) => item.id);

export function SiteNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();
  const { activeId, markNavigation } = useScrollSpy(sectionIds);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const handleNavigation = (id: PortfolioSectionId) => {
    markNavigation(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <aside className="site-sidebar" aria-label="Portfolio navigation">
        <p className="site-sidebar__name">Aditya Maurya</p>
        <NavigationLinks activeId={activeId} onNavigate={handleNavigation} />
        <p className="site-sidebar__social-label">Social links</p>
      </aside>

      <header className="mobile-navigation">
        <a className="mobile-navigation__name" href="#about">
          Aditya Maurya
        </a>
        <button
          className="mobile-navigation__toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span>Menu</span>
          <span aria-hidden="true" className="mobile-navigation__toggle-mark" />
        </button>
      </header>

      {isMenuOpen ? (
        <div className="mobile-navigation__panel" id={menuId}>
          <NavigationLinks activeId={activeId} onNavigate={handleNavigation} />
        </div>
      ) : null}
    </>
  );
}

type NavigationLinksProps = Readonly<{
  activeId: PortfolioSectionId;
  onNavigate: (id: PortfolioSectionId) => void;
}>;

function NavigationLinks({ activeId, onNavigate }: NavigationLinksProps) {
  return (
    <nav aria-label="Primary navigation">
      <ul className="section-navigation">
        {portfolioNavigation.map((item) => {
          const isActive = item.id === activeId;

          return (
            <li key={item.id}>
              <a
                className="section-navigation__link"
                data-active={isActive || undefined}
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                onClick={() => onNavigate(item.id)}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
