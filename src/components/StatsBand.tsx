import CountUp from "./CountUp";

export default function StatsBand() {
  return (
    <div className="band">
      <div className="wrap row">
        <div className="rv"><CountUp to={3.4} decimals={1} suffix="×" /><span>Avg. revenue growth</span></div>
        <div className="rv"><CountUp to={120} suffix="+" /><span>Projects delivered</span></div>
        <div className="rv"><CountUp to={17} suffix="k" /><span>Hours automated / mo</span></div>
        <div className="rv"><CountUp to={98} suffix="%" /><span>Client retention</span></div>
      </div>
    </div>
  );
}
