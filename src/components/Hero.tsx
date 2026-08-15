"use client";
import { useEffect, useRef } from "react";
import CountUp from "./CountUp";

const LINE1 = "Build Smarter Businesses";
const LINE2 = "with AI";
const EASE = "cubic-bezier(.22,1,.36,1)";

function Chars({ text, lineIndex }: { text: string; lineIndex: number }) {
  const words = text.split(" ");
  let i = 0;
  const nodes: JSX.Element[] = [];

  words.forEach((word, wi) => {
    nodes.push(
      <span
        className="word"
        key={`w${wi}`}
        style={wi < words.length - 1 ? { marginRight: "0.32em" } : undefined}
      >
        {Array.from(word).map((c) => {
          const idx = i++;
          return (
            <span
              key={idx}
              className="ch"
              style={{ animationDelay: `${0.55 + lineIndex * 0.28 + idx * 0.028}s` }}
            >
              {c}
            </span>
          );
        })}
      </span>
    );
    if (wi < words.length - 1) {
      i++;
    }
  });

  return <>{nodes}</>;
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const holoRef = useRef<HTMLDivElement>(null);

  /* Neural network canvas.
     Mobile budget: fewer particles and a shorter link radius (the pair loop is
     O(n²)), no pointer tracking on touch, and the loop is parked whenever the
     hero scrolls away or the tab is hidden. */
  useEffect(() => {
    const hero = heroRef.current;
    const cv = canvasRef.current;
    if (!hero || !cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;

    const MAX_PTS = fine ? 90 : 30;
    const LINK = fine ? 130 : 92;

    let W = 0, H = 0, raf = 0, lastW = 0, lastH = 0, running = false, onScreen = true;
    let pts: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const mouse = { x: -9999, y: -9999 };

    const size = () => {
      W = cv.width = hero.offsetWidth;
      H = cv.height = hero.offsetHeight;
      lastW = W; lastH = H;
      const n = Math.min(MAX_PTS, Math.floor((W * H) / 16000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.7,
      }));
    };
    size();

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        if (fine) {
          const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (dm < 160) { p.x += ((p.x - mouse.x) / dm) * 0.6; p.y += ((p.y - mouse.y) / dm) * 0.6; }
        }
      }
      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(96,165,250,${(1 - d / LINK) * 0.16})`;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      ctx.fillStyle = "rgba(52,211,153,.55)";
      for (const p of pts) {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fill();
      }
      if (running) raf = requestAnimationFrame(draw);
    };

    const start = () => {
      if (running || reduce) return;
      running = true;
      raf = requestAnimationFrame(draw);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    if (reduce) {
      draw();                      // one static frame, no loop
    } else {
      const io = new IntersectionObserver(([en]) => {
        onScreen = en.isIntersecting;
        if (onScreen && !document.hidden) start(); else stop();
      });
      io.observe(hero);
      const onVisibility = () => {
        if (document.hidden) stop(); else if (onScreen) start();
      };
      document.addEventListener("visibilitychange", onVisibility);
      start();

      /* Mobile browsers fire resize when the URL bar hides — only rebuild when
         the width really changed (or the device rotated). */
      let t = 0;
      const onResize = () => {
        clearTimeout(t);
        t = window.setTimeout(() => {
          if (Math.abs(hero.offsetWidth - lastW) > 40 || Math.abs(hero.offsetHeight - lastH) > 180) size();
        }, 200);
      };
      addEventListener("resize", onResize, { passive: true });

      let mm: ((e: MouseEvent) => void) | undefined;
      let ml: (() => void) | undefined;
      if (fine) {
        mm = (e: MouseEvent) => {
          const r = cv.getBoundingClientRect();
          mouse.x = e.clientX - r.left;
          mouse.y = e.clientY - r.top;
        };
        ml = () => { mouse.x = -9999; mouse.y = -9999; };
        hero.addEventListener("mousemove", mm);
        hero.addEventListener("mouseleave", ml);
      }

      return () => {
        stop();
        io.disconnect();
        document.removeEventListener("visibilitychange", onVisibility);
        clearTimeout(t);
        removeEventListener("resize", onResize);
        if (mm) hero.removeEventListener("mousemove", mm);
        if (ml) hero.removeEventListener("mouseleave", ml);
      };
    }
  }, []);

  /* Holographic card tilt */
  useEffect(() => {
    const hero = heroRef.current;
    const holo = holoRef.current;
    if (!hero || !holo) return;
    const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const mm = (e: MouseEvent) => {
      const r = holo.getBoundingClientRect();
      const px = (e.clientX - r.left - r.width / 2) / r.width;
      const py = (e.clientY - r.top - r.height / 2) / r.height;
      holo.style.transform = `rotateX(${py * -4}deg) rotateY(${px * 4}deg)`;
    };
    const ml = () => { holo.style.transform = ""; };
    hero.addEventListener("mousemove", mm);
    hero.addEventListener("mouseleave", ml);
    return () => {
      hero.removeEventListener("mousemove", mm);
      hero.removeEventListener("mouseleave", ml);
    };
  }, []);

  return (
    <header id="hero" ref={heroRef}>
      <canvas id="net" ref={canvasRef} aria-hidden="true" />
      <div className="wrap hero-grid">
        <div>
          <span className="badge" style={{ opacity: 0, animation: `fadeUp .9s ${EASE} .55s forwards` }}>
            <i /> #1 Premium AI Digital Agency
          </span>
          <h1 className="hero-h1" aria-label={`${LINE1} ${LINE2}`}>
            <span className="ln"><Chars text={LINE1} lineIndex={0} /></span>
            {/* Animated per-character spans get their own compositing layer, which
                an ancestor's background-clip:text cannot paint through — so the
                gradient line animates as one element instead. */}
            <span className="ln ln-grad grad-text">{LINE2}</span>
          </h1>
          <p className="hero-sub">
            We build premium websites, AI chatbots, AI voice agents, and intelligent automation
            systems that help businesses increase revenue, automate operations, and scale effortlessly.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary magnetic">
              Book Free Consultation <span className="arr">→</span>
            </a>
            <a href="#work" className="btn btn-ghost magnetic">View Portfolio</a>
          </div>
          <div className="hero-stats">
            <div className="st"><CountUp to={120} suffix="+" /><span>Projects shipped</span></div>
            <div className="st"><CountUp to={3.2} decimals={1} suffix="×" /><span>Avg. ROI lift</span></div>
            <div className="st"><CountUp to={98} suffix="%" /><span>Client retention</span></div>
          </div>
        </div>

        <div className="holo">
          <div className="holo-core" ref={holoRef}>
            <div className="holo-head">
              <div className="dots"><i /><i /><i /></div>
              <span>AI Operations · Live</span>
            </div>
            <div className="holo-metric">
              <div>
                <CountUp to={48200} format="k" />
                <div style={{ fontSize: 12, color: "var(--faint)" }}>Conversations automated</div>
              </div>
              <span className="up">▲ 32% this month</span>
            </div>
            <svg className="spark" viewBox="0 0 300 74" preserveAspectRatio="none" aria-hidden="true">
              <path
                className="fill" fill="url(#sparkFill)"
                d="M0,60 C30,52 45,58 70,44 C95,30 115,42 140,34 C165,26 185,30 210,20 C235,10 260,18 300,8 L300,74 L0,74 Z"
              />
              <path
                className="line"
                d="M0,60 C30,52 45,58 70,44 C95,30 115,42 140,34 C165,26 185,30 210,20 C235,10 260,18 300,8"
              />
            </svg>
            <div className="holo-rows">
              <div className="r"><i>◆</i> Chatbot resolved billing query <b>2s ago</b></div>
              <div className="r"><i>●</i> Voice agent booked a demo call <b>14s ago</b></div>
              <div className="r"><i>▲</i> CRM synced 1,208 new leads <b>1m ago</b></div>
            </div>
          </div>
          <div className="chip c1">
            <span className="ic">✦</span>
            <div><b>+41%</b> conversion rate</div>
          </div>
          <div className="chip c2">
            <div className="wave" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
            <div><b>Voice Agent</b><span style={{ color: "var(--faint)" }}>on call · 00:42</span></div>
          </div>
        </div>
      </div>
    </header>
  );
}
