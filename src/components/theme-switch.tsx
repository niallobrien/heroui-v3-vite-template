import { FC, useState, useEffect } from "react";
import clsx from "clsx";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setIsMounted(true);

    // Check for saved theme in localStorage, otherwise use system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    const initialTheme = savedTheme || systemPreference;
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  // Prevent Hydration Mismatch
  if (!isMounted) return <div className="w-6 h-6" />;

  return (
    <button
      aria-label={
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
      className={clsx(
        "px-px transition-opacity hover:opacity-80 cursor-pointer",
        className
      )}
      onClick={toggleTheme}
    >
      <div className="w-auto h-auto bg-transparent rounded-lg flex items-center justify-center !text-default-500 pt-px px-0 mx-0">
        {theme === "light" ? (
          <MoonFilledIcon size={22} />
        ) : (
          <SunFilledIcon size={22} />
        )}
      </div>
    </button>
  );
};
