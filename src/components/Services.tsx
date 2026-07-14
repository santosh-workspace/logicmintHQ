type Svc = { title: string; desc: string; icon: JSX.Element };

const S = 22;
const common = { width: S, height: S, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8 };

const SERVICES: Svc[] = [
  {
    title: "Website Design",
    desc: "Cinematic, conversion-focused websites engineered for speed, SEO, and story.",
    icon: <svg {...common}><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 20h8" /></svg>,
  },
  {
    title: "AI Chatbots",
    desc: "Human-like assistants that qualify leads and support customers 24/7.",
    icon: <svg {...common}><path d="M21 12a8 8 0 01-8 8H4l2-3a8 8 0 1115-5z" /><path d="M9 11h.01M13 11h.01M17 11h.01" /></svg>,
  },
  {
    title: "AI Voice Agents",
    desc: "Natural voice agents that book, answer, and route calls autonomously.",
    icon: <svg {...common}><path d="M12 3v18M8 7v10M4 10v4M16 7v10M20 10v4" /></svg>,
  },
  {
    title: "Workflow Automation",
    desc: "Connect your stack and let AI run the repetitive work end to end.",
    icon: <svg {...common}><path d="M4 6h6v6H4zM14 12h6v6h-6zM10 9h4M17 12V9M7 12v3h7" /></svg>,
  },
  {
    title: "CRM Automation",
    desc: "Enrich, sync, and act on customer data without manual effort.",
    icon: <svg {...common}><circle cx="9" cy="8" r="3.2" /><path d="M3.5 20c.6-3.4 2.9-5 5.5-5s4.9 1.6 5.5 5M17 8h5M19.5 5.5v5" /></svg>,
  },
  {
    title: "Process Automation",
    desc: "Redesign operations around intelligent, self-running systems.",
    icon: <svg {...common}><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" /><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" /></svg>,
  },
  {
    title: "API Integrations",
    desc: "Unify tools with resilient, well-documented integrations.",
    icon: <svg {...common}><path d="M9 17H6a4 4 0 010-8 5.5 5.5 0 0110.6-1.5A4.5 4.5 0 0117 17h-2" /><path d="M12 12v8M9 17l3 3 3-3" /></svg>,
  },
  {
    title: "AI Consulting",
    desc: "Strategy and roadmaps to deploy AI where it moves the needle.",
    icon: <svg {...common}><path d="M12 2l2.4 5.6L20 10l-5.6 2.4L12 18l-2.4-5.6L4 10l5.6-2.4z" /><path d="M19 16l1 2.5L22.5 19 20 20l-1 2.5L18 20l-2.5-1L18 18.5z" /></svg>,
  },
];

export default function Services() {
  return (
    <section id="services">
      <span id="areas" className="section-anchor" />
      <div className="wrap center">
        <div className="kicker rv">Services</div>
        <h2 className="h2 rv">
          Everything you need to <span className="grad-text">run on AI</span>
        </h2>
        <p className="lede rv">Eight specialized capabilities, delivered as one seamless partnership.</p>
        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <article key={s.title} className="svc rv tilt">
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <div className="ic">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="more">Explore →</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
