"use client";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import LogoMark from "./LogoMark";
import BrandWord from "./BrandWord";

const WHATSAPP_NUMBER = "918956467676";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const WHATSAPP_NUMBER = "918956467676";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const CALL_LINK = "tel:+918956467676";

const LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#areas", label: "Areas" },
  { href: "#work", label: "Our Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1023) setOpen(false); };
    addEventListener("resize", onResize);
    return () => removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const handleMenuOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) setOpen(false);
  };

  return (
    <>
      <nav id="nav" className={scrolled ? "scrolled" : ""} aria-label="Main navigation">
        <a className="brand" href="#hero" aria-label="LogicMintHQ home">
          <LogoMark />
          <BrandWord />
        </a>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
        <div className="nav-actions">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm magnetic" style={{ minWidth: "140px" }}>
            WhatsApp
          </a>
          <a href={CALL_LINK} className="btn btn-call btn-sm magnetic" style={{ minWidth: "120px" }}>
            Call
          </a>
        </div>
        <button
          className={`burger ${open ? "open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </nav>
      <div id="mobileMenu" className={open ? "open" : ""} onClick={handleMenuOverlayClick} ref={mobileMenuRef}>
        <div className="mm-links">
          {LINKS.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              style={{ transitionDelay: open ? `${0.06 * i + 0.1}s` : "0s" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm mm-cta"
            style={{ transitionDelay: open ? "0.46s" : "0s" }}
            onClick={() => setOpen(false)}
          >
            WhatsApp
          </a>
          <a
            href={CALL_LINK}
            className="btn btn-call btn-sm mm-cta"
            style={{ transitionDelay: open ? "0.52s" : "0s" }}
            onClick={() => setOpen(false)}
          >
            Call
          </a>
        </div>
      </div>
    </>
  );
}
