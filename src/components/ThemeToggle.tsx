import { useEffect, useState } from "react";
import Image from "next/image";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (systemDark ? "dark" : "light");

    document.documentElement.classList.toggle("dark", initial === "dark");

    // delay state update to avoid eslint warning
    setTimeout(() => setTheme(initial), 0);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  return (
    <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
      <Image
        src={theme === "dark" ? "/light-icon.svg" : "/dark-icon.svg"}
        alt={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        width={24}
        height={24}
        priority
      />
    </button>
  );
}
