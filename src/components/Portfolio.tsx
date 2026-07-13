export default function Portfolio() {
  return (
    <section id="work">
      <div className="wrap center">
        <div className="kicker rv">Selected Work</div>
        <h2 className="h2 rv">
          Projects that <span className="grad-text">perform</span>
        </h2>
        <p className="lede rv">Immersive experiences engineered around measurable outcomes.</p>
        <div className="port-grid">

          <article className="proj rv">
            <div className="thumb">
              <svg viewBox="0 0 400 262" preserveAspectRatio="xMidYMid slice" aria-label="Stratos analytics platform preview">
                <rect width="400" height="262" fill="#0a1226" />
                <rect x="40" y="36" width="320" height="190" rx="10" fill="#101c3a" stroke="#22335c" />
                <rect x="58" y="56" width="120" height="10" rx="5" fill="#2b3f6b" />
                <rect x="58" y="76" width="80" height="8" rx="4" fill="#1d2c50" />
                <polyline points="58,190 100,168 140,178 185,140 230,152 275,118 340,96" fill="none" stroke="url(#sparkGrad)" strokeWidth="3" strokeLinecap="round" />
                <circle cx="340" cy="96" r="5" fill="#10B981" />
                <rect x="58" y="206" width="60" height="8" rx="4" fill="#1d2c50" />
                <rect x="128" y="206" width="60" height="8" rx="4" fill="#1d2c50" />
                <circle cx="330" cy="60" r="14" fill="none" stroke="#10B981" strokeWidth="3" strokeDasharray="60 28" />
              </svg>
              <span className="tag">Web · Automation</span>
            </div>
            <div className="body">
              <h3>Stratos Analytics Platform</h3>
              <p>A cinematic SaaS site with an AI onboarding assistant that qualifies visitors in real time.</p>
              <span className="metric"><i>▲</i> +62% signups in 90 days</span>
            </div>
          </article>

          <article className="proj rv">
            <div className="thumb">
              <svg viewBox="0 0 400 262" preserveAspectRatio="xMidYMid slice" aria-label="Helio fintech app preview">
                <rect width="400" height="262" fill="#081120" />
                <rect x="140" y="24" width="120" height="238" rx="18" fill="#101c3a" stroke="#22335c" />
                <rect x="158" y="48" width="84" height="10" rx="5" fill="#2b3f6b" />
                <rect x="158" y="70" width="84" height="52" rx="8" fill="#0d2b45" />
                <path d="M164 112 q16-22 34-10 t38-16" fill="none" stroke="#10B981" strokeWidth="2.5" />
                <rect x="158" y="132" width="84" height="14" rx="7" fill="#1d2c50" />
                <rect x="158" y="154" width="84" height="14" rx="7" fill="#1d2c50" />
                <rect x="158" y="176" width="84" height="14" rx="7" fill="#1d2c50" />
                <rect x="158" y="204" width="84" height="20" rx="10" fill="url(#lmMint)" />
                <circle cx="80" cy="80" r="26" fill="none" stroke="#2563EB" strokeWidth="2" opacity=".5" />
                <circle cx="330" cy="190" r="34" fill="none" stroke="#10B981" strokeWidth="2" opacity=".4" />
              </svg>
              <span className="tag">AI Chatbot</span>
            </div>
            <div className="body">
              <h3>Helio Fintech Assistant</h3>
              <p>In-app AI concierge handling KYC questions, disputes, and payments guidance autonomously.</p>
              <span className="metric"><i>▲</i> 68% of tickets deflected</span>
            </div>
          </article>

          <article className="proj rv">
            <div className="thumb">
              <svg viewBox="0 0 400 262" preserveAspectRatio="xMidYMid slice" aria-label="Meridian voice concierge preview">
                <rect width="400" height="262" fill="#0a0f22" />
                <circle cx="200" cy="120" r="58" fill="none" stroke="#2563EB" strokeWidth="1.5" opacity=".55" />
                <circle cx="200" cy="120" r="78" fill="none" stroke="#10B981" strokeWidth="1.2" opacity=".35" />
                <circle cx="200" cy="120" r="36" fill="#0f1e3d" />
                <g stroke="#10B981" strokeWidth="4" strokeLinecap="round">
                  <line x1="182" y1="112" x2="182" y2="128" />
                  <line x1="192" y1="104" x2="192" y2="136" />
                  <line x1="202" y1="98" x2="202" y2="142" />
                  <line x1="212" y1="106" x2="212" y2="134" />
                  <line x1="222" y1="114" x2="222" y2="126" />
                </g>
                <rect x="120" y="206" width="160" height="12" rx="6" fill="#1d2c50" />
                <rect x="150" y="228" width="100" height="8" rx="4" fill="#16213e" />
              </svg>
              <span className="tag">Voice Agent</span>
            </div>
            <div className="body">
              <h3>Meridian Voice Concierge</h3>
              <p>A 24/7 booking voice agent for a hospitality group across 40 properties and 6 languages.</p>
              <span className="metric"><i>▲</i> 11k calls/mo automated</span>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
