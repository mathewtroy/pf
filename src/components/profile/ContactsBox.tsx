import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useLang } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export default function ContactsBox() {
  const { lang } = useLang();
  const t = TRANSLATIONS[lang].profile;

  return (
    <section id="contacts" className="contacts-box container fade-up">
      <h2 className="section-title">{t.contacts}</h2>

      <ul className="contact-list big">
        <li>
          <FontAwesomeIcon icon={faEnvelope} />{" "}
          <a href="mailto:alexkross@seznam.cz" className="link">
            alexkross@seznam.cz
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} />{" "}
          <a
            href="https://linkedin.com/in/aleksandrkross"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            linkedin.com/in/aleksandrkross
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} />{" "}
          <a
            href="https://github.com/mathewtroy"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            github.com/mathewtroy
          </a>
        </li>
      </ul>
    </section>
  );
}
