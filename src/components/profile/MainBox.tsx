import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useLang } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import { SKILLS, CV_FILE } from "@/data/constants";

export default function MainBox() {
  const { lang } = useLang();
  const t = TRANSLATIONS[lang].profile;

  const skillLabels = [
    "JavaScript",
    "React",
    "TypeScript",
    "PHP",
    "HTML",
    "CSS",
    "Java",
    "Linux",
    "Git",
    "Docker",
    "MySQL",
    "Figma",
  ];

  return (
    <section id="main" className="main-box container fade-up">
      {/* Left — photo */}
      <div className="main-left">
        <div className="main-photo-wrapper">
          <Image
            src="/pf-profile.svg"
            alt={t.name}
            width={520}
            height={520}
            className="main-photo"
            priority
          />
        </div>
      </div>

      {/* Right — info */}
      <div className="main-right">
        <div className="info-box">
          <h1 className="profile-title">{t.name.toUpperCase()}</h1>
          <h2 className="profile-role">{t.role.toUpperCase()}</h2>
          <p className="profile-about">{t.about}</p>
          <a href={CV_FILE} download className="btn primary with-accent">
            <FontAwesomeIcon icon={faDownload} /> {t.download}
          </a>
        </div>

        {/* Skills */}
        <div className="skills-card">
          <h3 className="skills-title">{t.skills}</h3>
          <div className="skills-grid">
            {SKILLS.map((icon, i) => (
              <div key={i} className="skill-item">
                <Image src={icon} alt={skillLabels[i]} width={40} height={40} />
                <span className="skill-label">{skillLabels[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
