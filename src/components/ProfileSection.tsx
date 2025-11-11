import { useMemo } from "react";

export default function ProfileSection() {

  const CV_DOWNLOAD_URL = useMemo(() => "/cv_kross_aleksandr.pdf", []);

  return (
    <header className="profile">
      <div className="container profile-grid">
        {/* Left side — description */}
        <div className="profile-copy">
          <div className="accent-line" aria-hidden />
          <h1 className="profile-title">
            I’m <span className="accent">Aleksandr Kross</span>,<br /> a Web Developer
          </h1>
          <p className="profile-sub">
            I create fast, modern, and accessible web applications with React,
            TypeScript, and Firebase — focused on clean code, smooth animations,
            and a great user experience.
          </p>

          <div className="profile-actions">
            <a
              href={CV_DOWNLOAD_URL}
              download="Aleksandr_Kross_CV.pdf"
              className="btn primary with-accent"
            >
              Download CV
            </a>

            <a href="#contact" className="btn outline with-accent">
              Contact Me
            </a>

            <a
              href="https://github.com/mathewtroy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn ghost with-accent"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right side — image */}
        <div className="profile-media">
          <img
            src="/pf-profile.svg"
            alt="Aleksandr Kross portrait"
            className="profile-img"
          />
          <div className="img-glow" aria-hidden />
        </div>
      </div>
    </header>
  );
}
