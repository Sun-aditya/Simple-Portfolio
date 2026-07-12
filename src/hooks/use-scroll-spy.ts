"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import type { PortfolioSectionId } from "@/lib/portfolio-navigation";

const CLICK_GRACE_PERIOD = 650;

export function useScrollSpy(sectionIds: readonly PortfolioSectionId[]) {
  const [activeId, setActiveId] = useState<PortfolioSectionId>(sectionIds[0]);
  const clickTimestamp = useRef(0);

  const markNavigation = useCallback((id: PortfolioSectionId) => {
    clickTimestamp.current = Date.now();
    setActiveId(id);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const visibleSections = new Map<string, IntersectionObserverEntry>();
    let animationFrame = 0;

    const updateFromScroll = () => {
      animationFrame = 0;

      if (Date.now() - clickTimestamp.current < CLICK_GRACE_PERIOD) return;

      const documentHeight = document.documentElement.scrollHeight;
      const atDocumentBottom =
        window.scrollY + window.innerHeight >= documentHeight - 4;

      if (atDocumentBottom) {
        setActiveId(sectionIds[sectionIds.length - 1]);
        return;
      }

      const candidates = [...visibleSections.values()]
        .filter((entry) => entry.isIntersecting)
        .sort(
          (first, second) =>
            Math.abs(first.boundingClientRect.top - 96) -
            Math.abs(second.boundingClientRect.top - 96),
        );

      const nearestSection = candidates[0]?.target.id as
        | PortfolioSectionId
        | undefined;

      if (nearestSection) setActiveId(nearestSection);
    };

    const scheduleUpdate = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updateFromScroll);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visibleSections.set(entry.target.id, entry));
        scheduleUpdate();
      },
      { rootMargin: "-96px 0px -48% 0px", threshold: [0, 0.1, 0.45] },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    scheduleUpdate();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (animationFrame !== 0) window.cancelAnimationFrame(animationFrame);
    };
  }, [sectionIds]);

  return { activeId, markNavigation };
}
