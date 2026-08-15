"use client";
import { useEffect } from "react";

/** Global, DOM-level effects: scroll reveals, magnetic buttons, 3D tilt, aurora parallax. */
export default function Effects() {
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;

    // Scroll reveals
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    document.querySelectorAll<HTMLElement>(".rv,.rv-l,.rv-r").forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 0.07}s`;
      io.observe(el);
    });

    // Everything below is pointer-driven decoration: on touch devices it can
    // never fire, so the listeners are not attached at all.
    if (!fine || reduce) return () => io.disconnect();

    // Magnetic buttons + 3D tilt cards (event delegation)
    const move = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const btn = t.closest?.<HTMLElement>(".magnetic");
      if (btn) {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.28;
        const y = (e.clientY - r.top - r.height / 2) * 0.28;
        btn.style.transform = `translate(${x}px,${y}px)`;
      }
      const card = t.closest?.<HTMLElement>(".tilt");
      if (card) {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        card.style.setProperty("--mx", px * 100 + "%");
        card.style.setProperty("--my", py * 100 + "%");
        card.style.transform = `translateY(-7px) rotateX(${(py - 0.5) * -7}deg) rotateY(${(px - 0.5) * 7}deg)`;
      }
    };
    const out = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const rel = e.relatedTarget as Node | null;
      const btn = t.closest?.<HTMLElement>(".magnetic");
      if (btn && !(rel && btn.contains(rel))) btn.style.transform = "";
      const card = t.closest?.<HTMLElement>(".tilt");
      if (card && !(rel && card.contains(rel))) card.style.transform = "";
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseout", out);

    // Aurora parallax — moving heavily blurred layers is expensive, so it is
    // desktop-only and coalesced into one rAF per frame.
    const a1 = document.querySelector<HTMLElement>(".aurora .a1");
    const a2 = document.querySelector<HTMLElement>(".aurora .a2");
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = scrollY;
        if (a1) a1.style.translate = `0 ${y * 0.06}px`;
        if (a2) a2.style.translate = `0 ${y * -0.04}px`;
        ticking = false;
      });
    };
    addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseout", out);
      removeEventListener("scroll", onScroll);
    };
  }, []);
  return null;
}
