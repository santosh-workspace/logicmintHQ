const TECH = [
  "Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "GSAP",
  "Framer Motion", "Three.js", "Spline", "OpenAI", "Claude", "Google Gemini",
  "Supabase", "Firebase", "n8n", "Make", "Zapier",
];

export default function TechStack() {
  return (
    <section id="tech">
      <div className="wrap center">
        <div className="kicker rv">Technologies</div>
        <h2 className="h2 rv">
          Built on a <span className="grad-text">best-in-class stack</span>
        </h2>
        <div className="tech-cloud rv">
          {TECH.map((t) => (
            <span key={t} className="tk"><i />{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
