const FEATURES = [
  { icon: "⚡", title: "Ship in weeks, not quarters", desc: "Focused sprints, weekly demos, and a launch cadence that keeps momentum." },
  { icon: "🛡", title: "Enterprise-grade reliability", desc: "Secure, monitored, and built to scale from day one." },
  { icon: "✦", title: "AI-native by default", desc: "Every deliverable is designed around intelligence — not bolted on after." },
  { icon: "◎", title: "Measured on your metrics", desc: "Conversion, retention, hours saved — we report on what you care about." },
];

export default function Why() {
  return (
    <section id="why">
      <div className="wrap why-grid">
        <div>
          <div className="kicker rv">Why LogicMintHQ</div>
          <h2 className="h2 rv">
            A partner obsessed with <span className="grad-text">your outcomes</span>
          </h2>
          <p className="lede rv" style={{ marginBottom: 26 }}>
            We combine design taste, engineering depth, and AI fluency to deliver systems that
            actually move your metrics.
          </p>
          {FEATURES.map((f) => (
            <div key={f.title} className="feat rv">
              <div className="fi">{f.icon}</div>
              <div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="orb-wrap rv-r" aria-hidden="true">
          <div className="orb-rings"><i /><i /><i /></div>
          <div className="orb" />
          <div className="sat s1">💬</div>
          <div className="sat s2">🎙</div>
          <div className="sat s3">⚙</div>
          <div className="sat s4">📈</div>
        </div>
      </div>
    </section>
  );
}
