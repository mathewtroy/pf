import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner container">
        <a href="/" className="brand">
          <img src="/pf-icon.svg" alt="AK" aria-hidden width={22} height={22} />
          <span>krossi.dev</span>
        </a>

        <div className="nav-right">
          <a className="nav-link" href="#projects">Projects</a>
          <a className="nav-link" href="#skills">Skills</a>
          <a className="nav-link" href="#contact">Contact</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
