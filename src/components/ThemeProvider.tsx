"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (x: number, y: number) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleTheme = useCallback((x: number, y: number) => {
    const next = theme === "dark" ? "light" : "dark";

    // Use View Transitions API if available for the ripple wipe effect
    if (
      typeof document !== "undefined" &&
      "startViewTransition" in document &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      // Set CSS custom properties for the origin point
      document.documentElement.style.setProperty("--vt-x", `${x}px`);
      document.documentElement.style.setProperty("--vt-y", `${y}px`);

      // Compute max radius (distance to farthest corner)
      const w = window.innerWidth;
      const h = window.innerHeight;
      const radius = Math.hypot(
        Math.max(x, w - x),
        Math.max(y, h - y)
      );
      document.documentElement.style.setProperty("--vt-radius", `${radius}px`);

      (document as Document & { startViewTransition: (cb: () => void) => void })
        .startViewTransition(() => {
          setTheme(next);
          document.documentElement.setAttribute("data-theme", next);
        });
    } else {
      setTheme(next);
      document.documentElement.setAttribute("data-theme", next);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div data-theme={theme} className={theme === "light" ? "theme-light" : ""}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
