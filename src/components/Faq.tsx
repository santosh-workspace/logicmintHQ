"use client";
import { useRef, useState } from "react";

const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Most websites launch in 3–5 weeks. Automation and AI systems vary with scope, but we always start in fast, visible milestones — you'll see working demos within the first two weeks.",
  },
  {
    q: "Do you build custom AI, or use existing tools?",
    a: "Both. We orchestrate the best models (OpenAI, Claude, Gemini) with custom logic, your data, and tools like n8n and Make — choosing whatever combination delivers the outcome fastest and most reliably.",
  },
  {
    q: "Can you integrate with our current CRM and tools?",
    a: "Yes — HubSpot, Salesforce, Pipedrive, Notion, Slack, WhatsApp, and virtually anything with an API. Integration is one of our core specialties.",
  },
  {
    q: "What does ongoing support look like?",
    a: "Every launch includes a stabilization period, monitoring, and documentation. Most clients continue with an optimization retainer where we tune performance monthly against your KPIs.",
  },
  {
    q: "How do we get started?",
    a: "Book a free consultation below. We'll audit your current setup, identify the highest-ROI opportunities, and send a clear proposal — usually within 48 hours.",
  },
];

function Item({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const ansRef = useRef<HTMLDivElement>(null);
  return (
    <div className={`faq ${open ? "open" : ""}`}>
      <button aria-expanded={open} onClick={onToggle}>
        {q}
        <span className="pl" />
      </button>
      <div
        className="ans"
        ref={ansRef}
        style={{ maxHeight: open && ansRef.current ? ansRef.current.scrollHeight : 0 }}
      >
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="faq">
      <div className="wrap center">
        <div className="kicker rv">FAQ</div>
        <h2 className="h2 rv">
          Questions, <span className="grad-text">answered</span>
        </h2>
        <div className="faq-list rv">
          {FAQS.map((f, i) => (
            <Item
              key={f.q}
              q={f.q}
              a={f.a}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
