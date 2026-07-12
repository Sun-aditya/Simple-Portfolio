"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

const storageKey = "simple-portfolio-theme";

function getSystemTheme(): ThemeMode {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setDocumentTheme(theme: ThemeMode) {
  if (theme === "dark") {
    document.documentElement.dataset.theme = "dark";
    return;
  }

  document.documentElement.removeAttribute("data-theme");
}

export function UtilityControls() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return "light";

    const storedTheme = window.localStorage.getItem(storageKey) as ThemeMode | null;
    return storedTheme ?? getSystemTheme();
  });

  useEffect(() => {
    setDocumentTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      window.localStorage.setItem(storageKey, nextTheme);
      return nextTheme;
    });
  };

  const isDark = theme === "dark";

  return (
    <div className="utility-controls" aria-label="Theme control">
      <button
        className="utility-controls__theme"
        type="button"
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        onClick={toggleTheme}
      >
        <span className="utility-controls__theme-label">Air</span>
        <span className="utility-controls__theme-icon" aria-hidden="true">
          {isDark ? <SunIcon /> : <MoonIcon />}
        </span>
      </button>
    </div>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M13.25 2.75a7.75 7.75 0 1 0 4 14.4 6.9 6.9 0 0 1-7.83-10.53 7.68 7.68 0 0 0 3.83-3.87Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 1.75v2.1M10 16.15v2.1M1.75 10h2.1M16.15 10h2.1M4.3 4.3l1.48 1.48M14.22 14.22l1.48 1.48M15.7 4.3l-1.48 1.48M5.78 14.22 4.3 15.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}