import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { PROJECTS, ProjectItem } from "@/data/projects";
import { useLang } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export default function ProjectsBox() {
  const { lang } = useLang();
  const t = TRANSLATIONS[lang];

  return (
    <section id="projects" className="projects-box container fade-up">
      <h2 className="section-title">{t.profile.projects}</h2>
      <div className="projects-grid centered">
        {PROJECTS.map((proj: ProjectItem) => (
          <div key={proj.title} className="project-card">
            <h3>{proj.title}</h3>
            <p className="muted">{t.projects[proj.key] ?? proj.desc}</p>

            <div className="project-tech">
              {proj.icons.map((icon: string, i: number) => (
                <div key={i} className="tech-item">
                  <Image src={icon} alt={proj.techLabels?.[i]} width={30} height={30} />
                  <span className="tech-label">{proj.techLabels?.[i]}</span>
                </div>
              ))}
            </div>

            <div className="project-links">
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary small with-accent"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  {t.profile.linkGithub}
                </a>
              )}
              {proj.website && (
                <a
                  href={proj.website}
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary small with-accent"
                >
                  <FontAwesomeIcon icon={faGlobe} />
                  {t.profile.linkLive}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
