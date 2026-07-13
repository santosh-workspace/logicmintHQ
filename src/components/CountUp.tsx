"use client";
import { useEffect, useRef } from "react";

type Props = {
  to: number;
  decimals?: number;
  suffix?: string;
  format?: "k";
  className?: string;
};

export default function CountUp({ to, decimals = 0, suffix = "", format, className }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([en]) => {
        if (!en.isIntersecting) return;
        obs.disconnect();
        const t0 = performance.now();
        const dur = 1800;
        const tick = (t: number) => {
          const p = Math.min((t - t0) / dur, 1);
          const e = 1 - Math.pow(1 - p, 4);
          const v = to * e;
          const txt = format === "k" ? (Math.round(v / 100) / 10).toFixed(1) + "k" : v.toFixed(decimals);
          el.textContent = txt + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, decimals, suffix, format]);

  return <b ref={ref} className={className}>0</b>;
}
