import Navbar from "@/components/Navbar";
import HeroSection from "@/components/ProfileSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* Placeholder section for anchor target used by "Contact Me" button */}
      <section id="contact" className="container">
        <h2 className="section-title">Contact</h2>
        <p className="muted">
          Email:{" "}
          <a className="link" href="mailto:krossale@fel.cvut.cz">
            krossale@fel.cvut.cz
          </a>
        </p>
      </section>
    </>
  );
}
