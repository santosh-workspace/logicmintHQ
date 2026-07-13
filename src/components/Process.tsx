const STEPS = [
  { title: "Discovery", desc: "We map your goals, systems, and highest-leverage AI opportunities." },
  { title: "Strategy", desc: "A prioritized roadmap with clear ROI targets and timelines." },
  { title: "Design", desc: "We prototype the experience and workflows around your users." },
  { title: "Development", desc: "Engineers and AI rigorously build, test, and integrate." },
  { title: "Launch", desc: "Zero-drama releases with monitoring and rollback baked in." },
  { title: "Optimization", desc: "Continuous tuning as real data compounds your results." },
];

export default function Process() {
  return (
    <section id="process" style={{ background: "linear-gradient(180deg,transparent,rgba(7,11,29,.6),transparent)" }}>
      <div className="wrap center">
        <div className="kicker rv">Process</div>
        <h2 className="h2 rv">
          From idea to <span className="grad-text">intelligent system</span>
        </h2>
        <p className="lede rv">A clear, collaborative path with momentum at every step.</p>
        <div className="steps">
          {STEPS.map((s, i) => (
            <div key={s.title} className="step rv">
              <div className="dot">{String(i + 1).padStart(2, "0")}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
