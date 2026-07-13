const QUOTES = [
  {
    quote: "LogicMintHQ rebuilt our site and shipped a chatbot that now closes deals while we sleep. The craft is on another level.",
    initials: "PN", name: "Priya Nair", role: "CEO, Stratos",
  },
  {
    quote: "The voice agent handles thousands of bookings a month flawlessly. Guests genuinely can't tell — and don't need to.",
    initials: "MW", name: "Marcus Webb", role: "COO, Meridian Group",
  },
  {
    quote: "Beautiful design and serious engineering. Our conversion rate jumped within the first two weeks of launch.",
    initials: "ES", name: "Elena Sousa", role: "CMO, Helio",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: "linear-gradient(180deg,transparent,rgba(7,11,29,.6),transparent)" }}>
      <div className="wrap center">
        <div className="kicker rv">Testimonials</div>
        <h2 className="h2 rv">
          Loved by <span className="grad-text">ambitious teams</span>
        </h2>
        <div className="tst-grid">
          {QUOTES.map((q) => (
            <div key={q.name} className="tst rv">
              <div className="stars">★★★★★</div>
              <q>{q.quote}</q>
              <div className="who">
                <div className="av">{q.initials}</div>
                <div>
                  <b>{q.name}</b>
                  <span>{q.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
