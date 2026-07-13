const COMPANIES = [
  "NovaBank", "Quantia", "Helio Health", "Stratos",
  "VoltIQ", "Meridian", "Northwind", "Cobalt Labs",
];

function Track() {
  return (
    <div className="track" aria-hidden="true">
      {COMPANIES.map((c) => (
        <span key={c} className="lgo"><i />{c}</span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marq-sec" aria-label="Trusted companies">
      <div className="marq-label">Trusted by forward-thinking teams</div>
      <div className="marquee">
        <Track />
        <Track />
      </div>
    </div>
  );
}
