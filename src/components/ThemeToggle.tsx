import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // avoid hydration mismatch

  const isDark = typeof document !== "undefined"
    ? document.documentElement.classList.contains("dark")
    : false;

  const toggle = () => {
    const root = document.documentElement;
    const next = isDark ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <button className="btn ghost small" onClick={toggle} aria-label="Toggle theme">
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
