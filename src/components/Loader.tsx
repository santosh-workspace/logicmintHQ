"use client";
import { useEffect, useState } from "react";
import LogoMark from "./LogoMark";

export default function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setDone(true), reduce ? 100 : 1900);
    const failsafe = setTimeout(() => setDone(true), 3500);
    return () => { clearTimeout(t); clearTimeout(failsafe); };
  }, []);
  return (
    <div id="loader" className={done ? "done" : ""} aria-hidden="true">
      <div className="lg">
        <LogoMark size={120} hq />
      </div>
      <div className="bar"><i /></div>
      <div className="word">LogicMintHQ</div>
    </div>
  );
}
