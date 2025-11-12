import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export default function Navbar() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { lang, toggleLang } = useLang();
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className="nav sticky-nav">
        <div className="nav-inner container">
          <Link href="/" className="brand">
            <Image src="/pf-icon.svg" alt="AK" width={22} height={22} priority />
            <span>{t.profile.name}</span>
          </Link>

          <div className="nav-right">
            <a className="nav-link" href="#main">{t.nav.main}</a>
            <a className="nav-link" href="#projects">{t.nav.projects}</a>
            <a className="nav-link" href="#contacts">{t.nav.contacts}</a>

            {/* Language Switcher */}
            <button className="lang-btn" onClick={toggleLang}>
              {lang.toUpperCase()}
            </button>

            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Floating back-to-top button */}
      {showScrollTop && (
        <button
          className="sticky-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
