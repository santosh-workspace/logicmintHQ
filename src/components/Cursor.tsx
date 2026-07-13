"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const glow = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let mx = -999, my = -999, rx = -999, ry = -999, gx = -999, gy = -999;
    let raf = 0;

    const mm = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dot.current) {
        dot.current.style.left = mx + "px";
        dot.current.style.top = my + "px";
      }
    };
    const loop = () => {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      gx += (mx - gx) * 0.07; gy += (my - gy) * 0.07;
      if (ring.current) { ring.current.style.left = rx + "px"; ring.current.style.top = ry + "px"; }
      if (glow.current) { glow.current.style.left = gx + "px"; glow.current.style.top = gy + "px"; }
      raf = requestAnimationFrame(loop);
    };
    const HOT = "a,button,.svc,.proj,.tk";
    const over = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest?.(HOT) && ring.current) {
        ring.current.style.width = "54px";
        ring.current.style.height = "54px";
        ring.current.style.borderColor = "rgba(16,185,129,.75)";
      }
    };
    const out = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest?.(HOT) && ring.current) {
        ring.current.style.width = "34px";
        ring.current.style.height = "34px";
        ring.current.style.borderColor = "rgba(96,165,250,.55)";
      }
    };
    addEventListener("mousemove", mm);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    loop();
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("mousemove", mm);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, []);

  return (
    <>
      <div id="cursorGlow" ref={glow} aria-hidden="true" />
      <div id="cursorDot" ref={dot} aria-hidden="true" />
      <div id="cursorRing" ref={ring} aria-hidden="true" />
    </>
  );
}
