"use client";
import { useEffect, useState, type MouseEvent } from "react";
import LogoMark from "./LogoMark";
import BrandWord from "./BrandWord";

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

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.15L2 22l5.1-1.53a9.9 9.9 0 0 0 4.94 1.32h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.83 14.02c-.24.68-1.42 1.3-1.96 1.36-.5.06-1.02.09-3.5-.86-2.96-1.17-4.85-4.11-5-4.31-.14-.2-1.2-1.6-1.2-3.05 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.85 2.06.92 2.21.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.29.76 1.26 1.63 2.03 1.12 1 2.06 1.32 2.35 1.47.3.15.47.13.65-.05.18-.18.71-.83.9-1.12.19-.29.38-.24.63-.14.25.09 1.62.77 1.9.9.28.15.46.22.53.34.07.13.07.75-.17 1.43Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2Z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  /* Lock the page behind the menu. Both html and body are locked because
     html carries overflow-x:hidden and therefore owns the scrollport. */
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const prevRoot = root.style.overflow;
    const prevBody = document.body.style.overflow;
    root.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      root.style.overflow = prevRoot;
      document.body.style.overflow = prevBody;
    };
  }, [open]);

  /* Close when the layout grows past the mobile breakpoint */
  useEffect(() => {
    const mq = matchMedia("(min-width: 1024px)");
    const onChange = () => { if (mq.matches) setOpen(false); };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
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
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm nav-cta magnetic"
            aria-label="Chat with us on WhatsApp"
          >
            <WhatsAppIcon />
            <span className="lbl">WhatsApp</span>
          </a>
          <a href={CALL_LINK} className="btn btn-call btn-sm nav-cta magnetic" aria-label="Call us">
            <PhoneIcon />
            <span className="lbl">Call</span>
          </a>
        </div>
        <button
          className={`burger ${open ? "open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobileMenu"
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </nav>
      <div id="mobileMenu" className={open ? "open" : ""} onClick={handleMenuOverlayClick}>
        <div className="mm-links">
          {LINKS.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              style={{ transitionDelay: open ? `${0.05 * i + 0.06}s` : "0s" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp mm-cta"
            style={{ transitionDelay: open ? "0.34s" : "0s" }}
            onClick={() => setOpen(false)}
          >
            <WhatsAppIcon />
            <span className="lbl">WhatsApp</span>
          </a>
          <a
            href={CALL_LINK}
            className="btn btn-call mm-cta"
            style={{ transitionDelay: open ? "0.4s" : "0s" }}
            onClick={() => setOpen(false)}
          >
            <PhoneIcon />
            <span className="lbl">Call</span>
          </a>
        </div>
      </div>
    </>
  );
}
