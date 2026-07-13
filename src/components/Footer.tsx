import LogoMark from "./LogoMark";
import BrandWord from "./BrandWord";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <a className="brand" href="#hero" style={{ marginBottom: 16 }}>
              <LogoMark size={34} />
              <BrandWord />
            </a>
            <p style={{ color: "var(--faint)", fontSize: 13.5, maxWidth: 260, marginTop: 14 }}>
              AI-powered digital agency. Premium websites, chatbots, voice agents &amp; automation.
            </p>
          </div>
          <div className="foot-links">
            <div>
              <h5>Company</h5>
              <a href="#why">About</a><a href="#work">Work</a><a href="#process">Process</a><a href="#contact">Contact</a>
            </div>
            <div>
              <h5>Services</h5>
              <a href="#services">Web Design</a><a href="#services">AI Chatbots</a><a href="#services">Voice Agents</a><a href="#services">Automation</a>
            </div>
            <div>
              <h5>Resources</h5>
              <a href="#faq">FAQ</a><a href="#testimonials">Testimonials</a><a href="#tech">Tech Stack</a>
            </div>
          </div>
        </div>
        <div className="foot-base">
          <span>© {new Date().getFullYear()} LogicMintHQ. All rights reserved.</span>
          <div className="socials" aria-label="Social links">
            <a href="#" aria-label="X / Twitter">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L1 2h6.5l4.4 5.9zm-1.1 18h1.7L6.6 3.8H4.7z" /></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.31h4.52V23H.24zM8.34 8.31h4.33v2h.06c.6-1.14 2.08-2.34 4.28-2.34C21.6 7.97 23 10.5 23 14.13V23h-4.5v-7.9c0-1.88-.04-4.3-2.62-4.3-2.63 0-3.03 2.05-3.03 4.17V23H8.34z" /></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
