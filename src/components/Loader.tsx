"use client";
import { useEffect, useState } from "react";
import LogoMark from "./LogoMark";

export default function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Phones get a shorter splash — it sits in front of the LCP element.
    const coarse = matchMedia("(pointer: coarse)").matches;
    const t = setTimeout(() => setDone(true), reduce ? 100 : coarse ? 1150 : 1900);
    const failsafe = setTimeout(() => setDone(true), 2600);
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
